import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Github, Folder, Settings, ListChecks } from 'lucide-react';

interface ImportPageProps {
  repoName?: string;
  teamName?: string;
  projectName?: string;
}

const ImportPage: React.FC<ImportPageProps> = ({
  repoName = 'gambhirsharma/vercel-clone',
  teamName = "gambhirsharma's project...",
  projectName = 'vercel-clone',
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 w-full max-w-lg text-gray-900">
        <h2 className="text-2xl font-bold mb-6">New Project</h2>
        {/* Importing from GitHub */}
        <div className="flex items-center gap-2 bg-gray-100 rounded px-4 py-2 mb-6">
          <Github className="w-5 h-5 text-gray-700" />
          <span className="font-mono text-sm">{repoName}</span>
          <span className="ml-auto text-xs text-gray-400">main</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Choose where you want to create the project and give it a name.</label>
        </div>
        {/* Team and Project Name */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <div className="flex items-center bg-gray-100 rounded px-3 py-2">
              <img src="https://avatars.githubusercontent.com/u/9919?v=4" alt="team" className="w-6 h-6 rounded-full mr-2" />
              <span className="text-sm flex-1 truncate">{teamName}</span>
              <span className="ml-2 text-xs bg-gray-200 text-gray-700 rounded px-2 py-0.5">Hobby</span>
              <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
            </div>
          </div>
          <Input
            className="flex-1 bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400"
            value={projectName}
            placeholder="Project Name"
            readOnly
          />
        </div>
        {/* Framework Preset */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Framework Preset</label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-2">
            <Folder className="w-5 h-5 text-gray-700 mr-2" />
            <span className="text-sm flex-1">Next.js</span>
            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </div>
        </div>
        {/* Root Directory */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Root Directory</label>
          <div className="flex items-center gap-2">
            <Input
              className="flex-1 bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400"
              value="./"
              readOnly
            />
            <Button variant="outline" className="border-gray-200 text-gray-900">Edit</Button>
          </div>
        </div>
        {/* Build and Output Settings */}
        <div className="mb-2">
          <button className="w-full flex items-center justify-between bg-gray-100 rounded px-3 py-2 text-left">
            <Settings className="w-4 h-4 mr-2 text-gray-400" />
            <span className="flex-1 text-sm">Build and Output Settings</span>
            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </button>
        </div>
        {/* Environment Variables */}
        <div className="mb-6">
          <button className="w-full flex items-center justify-between bg-gray-100 rounded px-3 py-2 text-left">
            <ListChecks className="w-4 h-4 mr-2 text-gray-400" />
            <span className="flex-1 text-sm">Environment Variables</span>
            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </button>
        </div>
        <Button className="w-full bg-gray-900 text-white font-semibold text-lg py-2 rounded">Deploy</Button>
      </div>
    </div>
  );
};

export default ImportPage;
