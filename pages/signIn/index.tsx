import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { BsGithub } from 'react-icons/bs';

function signin({ providers = {} }) {
  return (
    //  BACKGROUND
    <div
      className='
      h-screen
      justify-center
      items-center
      flex
      bg-gradient-to-br from-indigo-300  to-sky-300
      bg-opacity-70
      '
    >
      {/* WHITE CONTAINER   */}
      <div
        className='
        w-full
        lg:w-3/6
        my-6
        mx-auto
        lg:max-w-3xl
        h-hull
        lg:h-auto
        rounded-md
        shadow-lg
        flex
          flex-col
          bg-white
        '
      >
        {/* CONTENT CONTAINER */}
        <div className=' p-10 flex flex-col justify-center items-center'>
          <h3 className='text-3xl pb-10 font-semibold text-slate-600'>
            Sign in
          </h3>
          {/* Body */}
          <div
            className='
            w-full
            flex
            flex-col
            items-center
            justify-center
            mx-auto
            py-10
            '
          >
            {/* <p>Google</p>
                <p>Facebook</p> */}

            {/* BODY */}
            {providers &&
              Object.values(providers).map((provider: any) => (
                // <div key={provider.name} style={{ marginBottom: 0 }}>
                <button
                  key={provider.name}
                  className='flex gap-2 justify-center items-center py-2 border-2 rounded-lg w-4/6 font-semibold hover:opacity-30'
                  onClick={() => signIn(provider.id)}
                >
                  <BsGithub size={20} />
                  Sign in with {provider.name}
                </button>
              ))}
            {/* BODY */}
          </div>
        </div>
      </div>
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
