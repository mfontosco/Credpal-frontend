import FinalParagraph from '../components/Footer/FinalParagraph';
import Footer from '../components/Footer/Footer';

const FooterScreen = () => {
   return (
      <div className="w-full  pt-24 min-h-[550px] px-24">
         <div>
            <Footer />
         </div>
         <hr />
         <div className="mt-10 mb-10">
            <FinalParagraph />
         </div>
         <hr />
         <div className="mt-10 flex justify-end ">
            <p className="text-[12px] leading-[20px] font-[400]">
               We use cookies for better services.{' '}
               <span className="text-blue-400">
                  <a> Accept</a>
               </span>
            </p>
         </div>
      </div>
   );
};

export default FooterScreen;
