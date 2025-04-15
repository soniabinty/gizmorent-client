import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useSelector } from "react-redux";

const useRenter = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useSelector((state) => state.auth);

  const { data: isRenter, isPending: isRenterLoading } = useQuery({
    queryKey: ["isRenter", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/renter/${user.email}`);

      console.log("renter", res.data);
      return res.data?.renter;
    },
  });

  return [isRenter, isRenterLoading];
};

export default useRenter;
