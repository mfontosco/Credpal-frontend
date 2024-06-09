import productImage from '../../assets/products-2.png';
const Savings = () => {
   return (
      <div className="min-h-[500px] flex items-center text-black px-48  w-full">
         <div className="flex justify-between w-full ">
            <div className="w-1/2 ">
               <h2 className="text-2xl mb-5">Savings</h2>
               <p className="mb-5 font-[400] leading-8">
                  Simplify your savings journey by setting a budget. Save with
                  ease by setting goals, tracking your progress, and enabling
                  automatic transfers with your bank account. It’s that easy!
               </p>
               <button className="bg-[#3772FF] rounded-full px-6 text-[#FCFCFD] py-2">
                  {' '}
                  Download App
               </button>
            </div>
            <div className="w-1/2 flex justify-end pr-2 ">
               <img src={productImage} alt="product-image" className="w-96" />
            </div>
         </div>
      </div>
   );
};

export default Savings;
