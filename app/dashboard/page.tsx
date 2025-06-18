import React from 'react';
// import {config} from "@/utils/auth";
// import { getServerSession } from 'next-auth/next';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// Define a minimal type for GitHub repos
// type Repo = { id: number; name: string };

const projects = [
  {
    id: 1,
    name: 'mimpi',
    url: 'mimpi-kappa.vercel.app',
    repo: 'gambhirsharma/mimpi',
    description: 'add: supabase cli',
    date: 'Apr 14',
    branch: 'main',
  },
  {
    id: 2,
    name: 'spotify-clone',
    url: 'spotify-clone-mu-mocha.vercel.app',
    repo: 'gambhirsharma/spotify-clone',
    description: 'add: import supabase database typed var in a ts file',
    date: '7/31/23',
    branch: 'main',
  },
  // Add more dummy projects as needed
];

// const fetchGithubRepos = async () => {
//   const session = await getServerSession(config);
//     // console.log(`:ok -> featchGithubRepos() invoke; Session: ${JSON.stringify(session.accessToken)}`);
//   if (session?.accessToken) {
//     // console.log(`Session Access Token is working!!`)
//     const response = await fetch("https://api.github.com/user/repos?type=owner", {
//       headers: {
//         Authorization: `Bearer ${session?.accessToken}`,
//       },
//     });
//
//     const repos = await response.json();
//     return repos;
//   } else {
//     throw new Error("No access token found");
//
//   }
// };

// const DashBoard: React.FC = async ({  }) => {
//   try {
//     const repos = await fetchGithubRepos();
//
//     return (
//       <div>
//         <ul>
//           {repos.map((repo: Repo) => (
//             <li key={repo.id}>{repo.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// catch (error: unknown) {
//     let message = 'An unknown error occurred';
//
//     if (error instanceof Error) {
//       message = error.message;
//     }
//
//     return <div>Error: {message}</div>;
//   }
// };


const DashBoard: React.FC = async ({}) => {
  return (
<main className="flex flex-col items-center h-screen">
<div className="flex items-center w-full max-w-xl gap-2 mt-4">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5" />
          </span>
          <Input
            type="text"
            placeholder="Search Projects..."
            className="pl-10"
          />
        </div>
        <Link href="/new">
        <Button className="ml-2" variant="default">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button></Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border rounded-lg shadow p-6 flex flex-col gap-2"
          >
            <div className="font-semibold text-lg">{project.name}</div>
            <div className="text-sm text-gray-500">{project.url}</div>
            <div className="text-xs bg-gray-100 rounded px-2 py-1 w-fit text-gray-700">
              {project.repo}
            </div>
            <div className="text-sm">{project.description}</div>
            <div className="text-xs text-gray-400 mt-2">
              {project.date} on <span className="font-mono">{project.branch}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )

}

export default DashBoard;
