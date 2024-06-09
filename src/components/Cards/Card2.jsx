import { FiArrowRight } from 'react-icons/fi';
const Card2 = () => {
   return (
      <div className={`w-1/4 h-full bg-[ #F4F1F7] `}>
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
            <p>
               Learn More{' '}
               <span>
                  <FiArrowRight />
               </span>
            </p>
         </div>
      </div>
   );
};

export default Card2;
