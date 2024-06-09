import Nav from './Nav';
import mobile from '../../assets/mobile.png';

const Header = () => {
   return (
      <div className="px-24 py-6  min-h-screen w-full bg-[#006DF7]">
         <Nav />
         <div className="flex justify-between items-center mt-14">
            <div className="w-1/2">
               <h1 className="text-5xl text-white  w-96 leading-14">
                  One App, all your Financial Needs
               </h1>
               <p className="text-md text-white mt-10 w-full">
                  Take control of your finances on the go! Make payments, save,
                  invest, and access credit - all with one easy-to-use app.
               </p>
            </div>
            <img src={mobile} alt="mobile" />
         </div>
      </div>
   );
};

export default Header;
