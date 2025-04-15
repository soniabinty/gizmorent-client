import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGadgets, setPagination } from "../../Redux/Feature/gadgetSlice";
import Filter from "./Filter";
import Search from "./Search";
import Gadget from "./Gadget";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";

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

          {/* Pagination  */}
          {gadgets && (
            <div className="flex justify-center items-center mt-6 space-x-2">
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
                  className={`px-4 py-2 rounded-lg ${
                    pagination.currentPage === page
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
