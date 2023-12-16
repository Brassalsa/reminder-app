import { FormEvent, useState } from "react";

import { login } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "../routes/routes";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const reduxDispatch = useDispatch();
  const assignVal = (setState: React.Dispatch<any>) => {
    return (e: React.ChangeEvent<any>) => {
      setState(e.target.value);
    };
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    reduxDispatch(login({ id: "1", email, password }));
    navigate(routes.home);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 justify-center items-center h-60 w-max mx-auto"
        onSubmit={handleLogin}
      >
        <span className="flex gap-3 justify-between ">
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={assignVal(setEmail)}
            autoComplete="email"
            required
          />
        </span>
        <span className="flex gap-3 justify-between">
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={assignVal(setPassword)}
            autoComplete="current-password"
            required
          />
        </span>

        <button className="bg-blue-500 w-max text-white p-2 rounded-md hover:bg-blue-400 active:bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
