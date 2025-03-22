
import Card from '../../Shared/Card';
const Gadget = ({gadgets}) => {

  
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
       {
        gadgets.map((gadget) =>(
        <Card gadget={gadget} key={gadget._id}></Card>
    
        ))
      }
      
    </div>
  );
};

export default Gadget;