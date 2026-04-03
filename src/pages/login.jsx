import { use, useState } from "react";
import { login } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginHandle } from "../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    dispatch(loginHandle(user));
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div>
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
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
