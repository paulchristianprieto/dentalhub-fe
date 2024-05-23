import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="p-4 max-w-96 m-auto mt-8">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />

        <div className="mt-8">
          <button className="mr-2 hover:bg-slate-700" formAction={login}>
            Log in
          </button>
          <button className="hover:bg-slate-700" formAction={signup}>Sign up</button>
        </div>
      </form>
    </div>
  );
}
