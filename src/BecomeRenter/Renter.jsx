
import renter from '../assets/renter.jpg';
import renter1 from '../assets/renter1.png';

const Renter = () => {
    return (
        <div className='mt-5'
            style={{
                backgroundImage: `url(${renter})`,
                width: '100%', 
                minHeight: '30%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div>
                <h2 className="text-2xl md:text-5xl text-white pt-10 w-1/2 text-center flex mx-auto">Become A Renter and Grow Your Business</h2>
                <div className='flex justify-center gap-5 mt-20'>
                <button type="submit" className="btn btn-neutral py-6 px-10 ">
                    Sign Up as a Renter
                </button>
                <button type="submit" className="btn btn-neutral bg-white text-black py-6 px-10 ">
                    List Your Products
                </button>       
                </div>
            </div>
            <h2 className="twxt-lg md:text-2xl text-center bg-base-100 font-bold mt-10 py-2">Why Should You Partner With GizmoRent ?</h2>
            <div className=' flex justify-center'> 
                <img src={renter1} alt="benefits of becoming renter" />
            </div>
        </div>
    );
};

export default Renter;