import useAdmin from "../../Hooks/useAdmin";
import useRenter from "../../Hooks/useRenter";
import HomeAdmin from "./AdminDashboard/HomeAdmin";
import RenterDashboardHome from "./RenterDashboardHome";

const DashboardHome = () => {
  const [isAdmin] = useAdmin();
  const [isRenter] = useRenter();
  return (
    <div>
      {isRenter && <RenterDashboardHome></RenterDashboardHome>}

      {isAdmin && <HomeAdmin></HomeAdmin>}
    </div>
  );
};

export default DashboardHome;
