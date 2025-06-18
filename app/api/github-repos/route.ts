import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { config } from '@/utils/auth';

export const GET = async () => {
  const session = await getServerSession(config);

  if (!session?.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const res = await fetch('https://api.github.com/user/repos?type=owner', {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  const repos = await res.json();
  return NextResponse.json(repos);
};
