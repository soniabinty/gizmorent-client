import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGadgets } from "../../Redux/Feature/gadgetSlice"
import Filter from "./Filter";
import Search from "./Search";
import Gadget from "./Gadget";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";


const AllGadgets = () => {
  const dispatch = useDispatch();
  const { gadgets, filters, loading, error } = useSelector((state) => state.gadgets);

  useEffect(() => {
    dispatch(fetchGadgets(filters)); 
  }, [dispatch, filters]);

  return (
    <div className="max-w-7xl mx-auto p-7">
      <h2 className="text-4xl my-6">All Gadgets</h2>
      
      <div className="md:flex items-center gap-[130px] justify-between">
        <Search />
        <Filter />
      </div>

      <div className="md:grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <div className="my-12">
            {loading ? (
              <p>Loading gadgets...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <Gadget gadgets={gadgets} /> 
            )}
          </div>

          {/* Pagination (Example) */}
          <div className="flex justify-center">
            <div className="join my-8">
              <button className="join-item btn">1</button>
              <button className="join-item btn btn-active">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">4</button>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          {/* Filters */}
          <div className="border mt-12 border-gray-400 rounded-lg p-10">
            <FilterCategory />
            <FilterPrice />
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
