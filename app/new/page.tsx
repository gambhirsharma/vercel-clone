import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import RepoList from '@/components/RepoList'; // Import RepoList component

const providers = [
  { name: 'GitHub', color: 'bg-neutral-800 text-white', text: 'Continue with GitHub' },
  // { name: 'GitLab', color: 'bg-purple-700 text-white', text: 'Continue with GitLab' },
  // { name: 'Bitbucket', color: 'bg-blue-700 text-white', text: 'Continue with Bitbucket' },
];

const templates = [
  { name: 'Next.js Boilerplate', desc: '', icon: '🟦' },
  { name: 'AI Chatbot', desc: '', icon: '🤖' },
  { name: 'Commerce', desc: '', icon: '🛒' },
  { name: 'Vite + React Starter', desc: '', icon: '⚡️' },
];

const NewPage: React.FC = async () => {
  const session = await getServerSession()
  // const user = session?.user as sessionUser; // Removed as unused
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-8 relative">
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">Let&apos;s build something new.</h1>
        <p className="text-lg text-gray-500 mb-8 text-center max-w-2xl">To deploy a new Project, import an existing Git Repository or get started with one of our Templates.</p>
        {/* Search Bar */}
        <div className="w-full max-w-2xl flex items-center gap-2 mb-10">
          <input
            type="text"
            placeholder="Ask v0 to build something..."
            className="flex-1 rounded-md bg-gray-100 border border-gray-200 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button variant="secondary" className="bg-gray-200 text-gray-900">Build It →</Button>
        </div>
        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
          {/* Import Git Repository Card */}
          <div className="bg-gray-50 rounded-xl p-6 flex-1 min-w-[300px] max-w-md shadow border border-gray-200">
            <div className="flex flex-col gap-3">
              {session ? (
                <RepoList />
              ) : (
                  <div>
                    
            <h2 className="text-lg font-semibold mb-4">Import Git Repository</h2>
            <p className="text-gray-500 mb-6 text-sm">Select a Git provider to import an existing project from a Git Repository.</p>
                {providers.map((provider) => (
                  <Link href="/" key={provider.name}>
                    <Button key={provider.name} className={`w-full ${provider.color}`}>
                      {provider.text}
                    </Button>
                  </Link>
                ))}
                                        </div>
              )}
            </div>
          </div>
          {/* Clone Template Card */}
          <div className="bg-gray-50 rounded-xl p-6 flex-1 min-w-[300px] max-w-md shadow border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Clone Template</h2>
              <span className="text-xs text-gray-500">Framework</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {templates.map((tpl) => (
                <div key={tpl.name} className="bg-white rounded-lg p-4 flex flex-col items-center justify-center gap-2 border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                  <span className="text-3xl">{tpl.icon}</span>
                  <span className="text-sm font-medium text-center text-gray-900">{tpl.name}</span>
                </div>
              ))}
            </div>
            <Button variant="link" className="text-primary w-full mt-2">Browse All Templates →</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewPage;
