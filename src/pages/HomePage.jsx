import { Login } from "../components/Login";

export const HomePage = ({ user, setUser }) => {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <hr />
      <Login user={user} setUser={setUser} />
    </div>
  );
};
