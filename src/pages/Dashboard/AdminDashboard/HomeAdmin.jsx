import React from 'react';
import Stat from './HomeComponant/Stat';
import Charts from './HomeComponant/Charts';
import TopRenter from './HomeComponant/TopRenter';
import RecentOrders from './HomeComponant/RecentOrders';
import RecentTransection from './HomeComponant/RecentTransection';
import ProductData from './HomeComponant/ProductData';

const HomeAdmin = () => {
  return (
    <div className='py-6 mt-4'>
   <Stat></Stat>
   <Charts></Charts>
   <div className='mt-12 md:grid gap-8 space-y-6 grid-cols-6 '>
   
<div className='col-span-2'>
<ProductData></ProductData>
</div>

    <div className='col-span-4'>
    <RecentOrders></RecentOrders>
    </div>
  
   
   </div>

   <div className='mt-12 md:grid gap-8 space-y-6 grid-cols-6 '>
   
   <div className='col-span-2'>
   <TopRenter></TopRenter>
   </div>
   
       <div className='col-span-4'>
       <RecentTransection></RecentTransection>
       </div>
     
      
      </div>

    </div>
  );
};

export default HomeAdmin;