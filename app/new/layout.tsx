import NavBar, { sessionUser } from '@/components/NavBar';
import { getServerSession } from 'next-auth';
import React from 'react';

interface NewLayoutProps {
  children: React.ReactNode;
}

const NewLayout: React.FC<NewLayoutProps> = async ({ children }) => {
  const session = await getServerSession()
  const user = session?.user as sessionUser;
  return (
    <div>
      <NavBar user={user}/>
      {children}
    </div>
  );
};

export default NewLayout;
