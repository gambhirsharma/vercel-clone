import NavBar, { sessionUser } from '@/components/NavBar';
import { getServerSession } from 'next-auth';
import React from 'react';

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = async ({ children  }) => {
  const session = await getServerSession()

  const user = session?.user as sessionUser;
    // const session = await getServerSession();

  return (
    <div>
      <NavBar user={user}/>
        {children}
    </div>
  );
};

export default DashBoardLayout;
