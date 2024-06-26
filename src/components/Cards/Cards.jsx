import { FiArrowRight } from 'react-icons/fi';
const Cards = () => {
   return (
      <div className={`w-1/4 h-full bg-[#F6F0EF] px-2 `}>
         {' '}
         <div className="mt-24">
            <h2 className="font-[700] text-[32px] mb-4 leading-[41.66px]">
               Move With CredPal
            </h2>
            <p className="w-2/3 mb-4 font-[400] text-[14px] leading-[24px]">
               CredPal enables users to pay for Bolt rides and food orders, with
               the option to pay now or pay later, based on the available
               payment options.
            </p>
            <p className="flex items-center">
               Learn More{' '}
               <span>
                  <FiArrowRight />
               </span>
            </p>
         </div>
      </div>
   );
};

export default Cards;
