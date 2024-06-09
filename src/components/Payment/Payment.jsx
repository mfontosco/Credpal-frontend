import productImage from '../../assets/products-1.png';

const Payment = () => {
   return (
      <div className="min-h-[650px] flex items-center text-black px-48  w-full ">
         <div className="flex justify-between w-full ">
            <div className="w-1/2 ">
               <h2 className="text-2xl mb-5">Payments</h2>
               <p className="mb-5 font-[400] leading-8">
                  Enjoy a secure, reliable and convenient way to pay. Whether
                  you're paying for a purchase, subscription or any other type
                  of payment, CredPal is designed to make the process fast and
                  easy.
               </p>
               <button className="bg-[#3772FF] px-6 text-[#FCFCFD] py-2">
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

export default Payment;
