import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
import { GetServerSideProps } from 'next';

function signin({ providers = {} }) {
  return (
    <div>
      <p>login page!!!!!</p>
      {providers &&
        Object.values(providers).map((provider: any) => (
          <div key={provider.name} style={{ marginBottom: 0 }}>
            <button className='border-2' onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}

export default signin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
};
