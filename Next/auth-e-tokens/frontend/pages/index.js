import { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = useState({
    username: "sebinha",
    password: "safepassword",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          authService
            .login(values)
            .then(() => {
              router.push("/auth-page-ssr");
              // router.push("/auth-page-static");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        <input
          placeholder="Usuário"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        <div>
          <button>Entrar</button>
        </div>
        <div>
          <br />
          <a href="/auth-page-static">Static</a>
          <br />
          <br />
          <a href="/auth-page-ssr">SSR</a>
        </div>
      </form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
