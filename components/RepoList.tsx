'use client';

import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';
import { Button } from './ui/button';
import { Lock, GitBranch, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type repoType = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  updated_at: string;
  default_branch: string;
};

const fetchGithubRepos = async () => {
  const res = await fetch('/api/github-repos');
  if (!res.ok) throw new Error("Failed to fetch repositories");
  return res.json();
};


const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

const RepoList: React.FC = () => {
  const [repos, setRepos] = React.useState<repoType[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    fetchGithubRepos()
      .then((data) => {
        setRepos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // For demo, static user
  const user = {
    name: 'gambhirsharma',
    avatar: 'https://avatars.githubusercontent.com/u/9919?v=4',
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow border border-gray-200 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Import Git Repository</h2>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-1">
          <Image src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" height={100} width={100} />
          <span className="text-sm font-medium">{user.name}</span>
          <GitBranch className="ml-1 text-gray-400 w-4 h-4" />
        </div>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-sm focus:outline-none"
          />
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {
          isLoading
            ? Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <Skeleton className="h-8 w-20 rounded" />
              </div>
            ))
            : repos.slice(0, 5).map((repo) => (
          <div key={repo.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {/* Placeholder for repo icon */}
              <span className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs font-bold">
                {repo.name[0].toUpperCase()}
              </span>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-gray-900 text-sm">{repo.name}</span>
                  {repo.private && (
                    <Lock className="text-gray-400 ml-1 w-4 h-4">
                      <title>Private</title>
                    </Lock>
                  )}
                </div>
                <span className="text-xs text-gray-400">{formatTimeAgo(repo.updated_at)}</span>
              </div>
            </div>
            <Button size="sm" className="px-4" onClick={() => router.push(`/new/import?repo=${encodeURIComponent(repo.full_name)}&branch=${encodeURIComponent(repo.default_branch)}`)}>
              Import
            </Button>
          </div>
        ))}
      </div>
      <div className="pt-4 text-sm text-primary cursor-pointer hover:underline">Import Third-Party Git Repository →</div>
    </div>
  );
};

export default RepoList;
