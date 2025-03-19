
import Filter from "./Filter";
import Search from "./Search";

import Gadget from "./Gadget";
import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import FilterRange from "./FilterRange";

const AllGadgets = () => {


  return (
    <div className="max-w-7xl mx-auto p-7">
      <h2 className="text-4xl my-6">All Gadgets</h2>
    
  <div className="md:flex items-center gap-[245px] justify-between">
<Search></Search>
<Filter></Filter>
     </div>

      <div className="md:grid grid-cols-3 gap-8">
       
        <div className="col-span-2 ">
          {/* Sorting Dropdown */}
   
<div className="my-12">
  <Gadget></Gadget>
<div className="flex justify-center">
  <div className="join my-8 ">
  <button className="join-item btn">1</button>
  <button className="join-item btn btn-active">2</button>
  <button className="join-item btn">3</button>
  <button className="join-item btn">4</button>
</div>
</div>
  

</div>
         
       
        </div>

        {/* Right section (spans one column) */}
        <div className="col-span-1 ">
       
         {/* filter by category */}
<div className=" border mt-12 border-gray-400 rounded-lg p-10">
  
  <FilterCategory></FilterCategory>
        <FilterPrice></FilterPrice>
        <FilterRange></FilterRange>
</div>
        

        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
