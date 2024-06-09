import logo from '../../assets/Vector.png';
const Nav = () => {
   return (
      <div className="h-10  w-full flex justify-between ">
         <ul className="text-white flex items-center justify-between w-2/5 ">
            <li>
               {' '}
               <img src={logo} className="bg-white " alt="credpal-logo" />
            </li>
            <li>Products</li>
            <li>Business</li>
            <li>What We Do</li>
         </ul>
         <ul className="text-white flex items-center justify-between w-2/5">
            <li>FAQs</li>
            <li>Business</li>
            <li>
               <button className="p-2 bg-white text-black rounded-full shadow-md">
                  Download the Credpal app
               </button>
            </li>
         </ul>
      </div>
   );
};

export default Nav;
