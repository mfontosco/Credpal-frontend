import productImage from '../../assets/products-4.png';

const CreditBuilder = () => {
   return (
      <div className="min-h-[550px] flex items-center text-black px-48  w-full ">
         <div className="flex justify-between w-full ">
            <div className="w-1/2 ">
               <h2 className="text-2xl mb-5">Credit Builder</h2>
               <p className="mb-10 font-[400] leading-8">
                  Fund your virtual card and make payments everywhere. Use your
                  CredPal virtual card to make purchases both online and offline
                  with ease, and benefit from our reward-rich programs.
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

export default CreditBuilder;
