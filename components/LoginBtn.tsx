import { useSession, signIn, signOut } from 'next-auth/react';

interface LoginBtnProps {
  label: string;
  style: string;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ label, style }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* TODO:これをtodaysAchievement.tsxの中に表示したい */}
        {/* <p>Hello {session.user?.name}!</p> */}
        <button
          className='bg-blue-50 text-blue-950 font-semibold py-1 px-2 md:px-4 hover:opacity-50 rounded-lg transition'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <button
    className={`${style} font-semibold hover:opacity-50 rounded-lg transition`}
      
      onClick={() => signIn()}
    >
      {label}
    </button>
  );
};

export default LoginBtn;
