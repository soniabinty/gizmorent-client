import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGadgets, setPagination } from "../../Redux/Feature/gadgetSlice";
import Filter from "./Filter";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import Gadget from "./Gadget";
import Search from "./Search";
import img from '../../assets/image/2106.q703.016.S.m004.c10.household appliance realistic.jpg'
const AllGadgets = () => {
  const dispatch = useDispatch();
  const { gadgets, filters, loading, error, pagination } = useSelector(
    (state) => state.gadgets
  );

  useEffect(() => {
    dispatch(fetchGadgets({ ...filters, page: pagination.currentPage }));
  }, [dispatch, filters, pagination.currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage !== pagination.currentPage) {
      dispatch(setPagination({ currentPage: newPage }));
    }
  };

  return (
    <div className="max-w-7xl  mx-auto px-4 pb-6">

    

      <div className="md:grid grid-cols-4 gap-8">

        
     
   <div className="col-span-1">
          {/* Filters */}
          <div className=" rounded-lg p-10">
            <FilterCategory />
            <FilterPrice />
          </div>
        </div>
        <div className="col-span-3">


        <div
  className="h-[250px] w-full mb-6 bg-cover bg-center relative rounded-lg"
  style={{ backgroundImage: `url(${img})` }}
>
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h2 className="text-white text-4xl font-bold">Rent Your Needs</h2>
  </div>
</div>


<div className="md:flex items-center gap-[130px] justify-between">
        <Search />
        <Filter />
      </div>
          <div className="my-12">
            {loading ? (
              <p>Loading gadgets...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <Gadget gadgets={gadgets} />
            )}
          </div>

          {/* Pagination  */}
          {gadgets && (
            <div className="flex flex-wrap space-y-2 justify-center items-center mt-6 space-x-2">
              {/* Previous  */}
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
              >
                Previous
              </button>

              {/* Page Number */}
              {Array.from(
                { length: pagination.totalPages },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg ${pagination.currentPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                    }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}

              {/* Next  */}
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage >= pagination.totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>

     
      </div>


    </div>
  );
};

export default AllGadgets;