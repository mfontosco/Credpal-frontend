const Banner = () => {
   return (
      <div className="h-[500px] w-full flex justify-center items-center ">
         <div className="h-[250px] w-full  flex  justify-center items-center mx-auto  bg-[#3772FF]">
            <div className="w-3/5 text-center text-white">
               <h2 className="text-center text-[36px] font-[700] leading-[46.87px]">
                  Start building your credit score today
               </h2>
               <p className="text-center text-[20px] font-[400] leading-[32px]">
                  Download our app to get started on your credit journey in
                  Africa. Make the first move towards a better financial future
                  today.
               </p>
               <button className="bg-white text-center mt-[14px] rounded-full px-6 text-[#3772FF] py-2">
                  {' '}
                  Download App
               </button>
            </div>
         </div>
      </div>
   );
};

export default Banner;
