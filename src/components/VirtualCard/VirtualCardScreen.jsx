import productImage from '../../assets/products-3.png';

const VirtualCard = () => {
   return (
      <div className="min-h-[550px] flex items-center text-black px-48  w-full ">
         <div className="flex justify-between w-full ">
            <div className="w-1/2 ">
               <h2 className="text-2xl mb-5">Virtual Cards</h2>
               <p className="mb-5 font-[400] leading-8">
                  Create a virtual credit or cash card, make secure online
                  purchases, keep track of your spending, and have complete
                  visibility of where your funds are going. With advanced
                  security features, you have the ability to set spending limits
                  and exert control over your spending.
               </p>
               <button className="bg-[#3772FF] rounded-full px-6 text-[#FCFCFD] py-2">
                  {' '}
                  Download App
               </button>
            </div>
            <div className="w-1/2 flex justify-center pr-10 ">
               <img src={productImage} alt="product-image" className="w-72" />
            </div>
         </div>
      </div>
   );
};

export default VirtualCard;
