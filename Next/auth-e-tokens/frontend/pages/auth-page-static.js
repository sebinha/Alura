import { withSessionHOC } from '../src/services/auth/session';

function AuthPageStatic(props) {

  return (
    <div>
      <h1>Static</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <a href="/logout">Logout</a>
    </div>
  );
}

export default withSessionHOC(AuthPageStatic);
