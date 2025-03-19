
import Filter from "./Filter";
import Search from "./Search";

import Gadget from "./Gadget";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";

const AllGadgets = () => {


  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-4xl mb-4">All Gadgets</h2>

      <div className="grid grid-cols-3 gap-8">
       
        <div className="col-span-2 ">
          {/* Sorting Dropdown */}
       <Filter></Filter>
<Search></Search>
<div className="my-12">
  <Gadget></Gadget>

</div>
         
       
        </div>

        {/* Right section (spans one column) */}
        <div className="col-span-1 my-[70px] border border-gray-400 rounded-lg p-10">
         {/* filter by category */}

        <FilterCategory></FilterCategory>
        <FilterPrice></FilterPrice>

        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
