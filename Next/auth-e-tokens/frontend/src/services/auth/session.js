import { authService } from './authService';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const withSession = (fn) => async (context) => {
    try {
      const session = await authService.getSession(context);
      return fn({ ...context, req: { ...context.req, session } });
    } catch (e) {
      return {
        redirect: {
          permanent: false,
          destination: "/?status=401",
        },
      };
    }
  };

function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getSession()
      .then(setSession)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    session: session?.data,
    loading,
    error,
  };
}

const withSessionHOC = (Component) => (props) => {
  const router = useRouter();
  const session = useSession();

  if(!session.loading && session.error) {
    router.push("/?status=401");
  }

  const modifiedProps = {
    ...props,
    session: session.session,
  };

  return <Component {...modifiedProps} />;
};



export  {withSession, withSessionHOC};