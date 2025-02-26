import { withSession } from "../src/services/auth/session";
function AuthPageSSR(props) {
  return (
    <div>
      <h1>SSR</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <a href="/logout">Logout</a>
    </div>
  );
}

export const getServerSideProps = withSession((context) => {
  return {
    props: {
      session: context.req.session,
    },
  };
});

// export async function getServerSideProps(context) {
//   try {
//     return {
//       props: {
//         session: await authService.getSession(context),
//       },
//     };
//   } catch (e) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/?status=401",
//       },
//     };
//   }
// }

export default AuthPageSSR;
