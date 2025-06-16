import React from 'react';
import {config} from "@/utils/auth";
import { getServerSession } from 'next-auth/next';

interface DashBoardProps {
  
}

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

const DashBoard: React.FC<DashBoardProps> = async ({  }) => {
  try {
    const repos = await fetchGithubRepos();

    return (
      <div>
        <ul>
          {repos.map((repo: any) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  catch (error) {
    return <div>Error: {error.message}</div>;
  }
};

export default DashBoard;
