import JoinCredPal from '../../assets/joincredpal.png';
import appstore from '../../assets/appstore.png';
import googleplay from '../../assets/googleplay.png';
const JoinCredalToday = () => {
   return (
      <div className="h-full w-full flex bg-[#f1f5ff]">
         <div className="px-10 w-1/2 flex justify-center items-center">
            <div className="h-[266px] w-[450px]">
               <h2 className="font-[700] text-[#101828] text-[48px] leading-[60px]">
                  Join CredPal today
               </h2>
               <p className="leading-[30px] text-[18px] mt-4 font-[400] pr-4">
                  Download the CredPal app and join millions of satisfied
                  customers who are already using CredPal to access credit, make
                  payments, invest & many more!
               </p>
               <div className="flex gap-4 mt-10">
                  <img src={appstore} alt="app-store" />
                  <img src={googleplay} alt="app-store" />
               </div>
            </div>
         </div>
         <div className="w-1/2">
            <img src={JoinCredPal} className="w-full" alt="" />
         </div>
      </div>
   );
};

export default JoinCredalToday;
