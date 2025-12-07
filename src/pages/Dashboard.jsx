import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Dashboard</h1>
      <p>You are logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
