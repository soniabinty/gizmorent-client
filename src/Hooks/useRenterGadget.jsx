import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRenterGadget = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: renterGadgets,

    refetch,
  } = useQuery({
    queryKey: ["renterGadgets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/renter-gadgets?status=pending`);
      return res.data;
    },
  });
  return [renterGadgets, refetch];
};

export default useRenterGadget;
