import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store/store";
import { logout } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const reduxDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    reduxDispatch(logout());
    navigate("/login");
  };
  return (
    <div className="flex flex-wrap justify-center items-center py-4 mx-2 max-w-7xl">
      <h1 className="text-2xl text-center flex-1 font-bold">
        <span className="text-blue-500">RE</span>minder App
      </h1>
      {user && (
        <button
          className="bg-red-500 text-white p-1 rounded-md hover:bg-red-400 active:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
