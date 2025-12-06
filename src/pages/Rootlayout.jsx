import Nav from '../pages/Nav'
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
    return (
       <>
         <Nav />   {/* navbar at top */}
         <div className="page-content">
           <Outlet /> {/* pages will appear here */}
         </div>
       </>
    )
};

export default Rootlayout;