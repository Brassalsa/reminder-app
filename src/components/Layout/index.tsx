import { useSelector } from "react-redux";
import Header from "../Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "../../features/store/store";

function Layout() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    console.log("rer");
    if (!user) {
      navigate("/login");
    }
    setRendered(true);
  }, [user]);

  if (isRendered)
    return (
      <>
        <Header />
        <Outlet></Outlet>
      </>
    );
}

export default Layout;
