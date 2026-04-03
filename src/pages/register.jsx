import { useState } from "react";
import { register } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };
  return (
    <div className="max-w-xl mx-auto my-20">
      <form onSubmit={handleSubmit} className="grid items-center p-5 border">
        <input
          className="border p-3"
          type="text"
          placeholder="E-posta adresi"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          className="border p-3"
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!email || !password}
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

export default Register;
