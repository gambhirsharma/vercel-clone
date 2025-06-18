import React from 'react';
import {config} from "@/utils/auth";
import { getServerSession } from 'next-auth/next';

// Define a minimal type for GitHub repos
type Repo = { id: number; name: string };

const fetchGithubRepos = async () => {
  const session = await getServerSession(config);
    // console.log(`:ok -> featchGithubRepos() invoke; Session: ${JSON.stringify(session.accessToken)}`);
  if (session?.accessToken) {
    // console.log(`Session Access Token is working!!`)
    const response = await fetch("https://api.github.com/user/repos?type=owner", {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });

    const repos = await response.json();
    return repos;
  } else {
    throw new Error("No access token found");

  }
};

const DashBoard: React.FC = async ({  }) => {
  try {
    const repos = await fetchGithubRepos();

    return (
      <div>
        <ul>
          {repos.map((repo: Repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
catch (error: unknown) {
    let message = 'An unknown error occurred';

    if (error instanceof Error) {
      message = error.message;
    }

    return <div>Error: {message}</div>;
  }
};

export default DashBoard;
