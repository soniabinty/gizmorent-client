import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen min-w-full bg-gray-50">
                <span className="loading loading-dots loading-lg text-Primary"></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to="/login" />;
    }

    return children;
};

export default PrivateRoute;
