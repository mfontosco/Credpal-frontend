import googleplay from '../../assets/googleplay.png';
import applestore from '../../assets/appstore.png';
import logo from '../../assets/logo.svg';
const Footer = () => {
   return (
      <div className=" w-full h-full mb-10 flex  ">
         <div className="w-1/3">
            <ul>
               <li>
                  <img src={logo} className="" alt="credpal-logo" />
               </li>
               <li className="mt-5">
                  <p className="font-[400] text-[12px] px-2 leading-[26px]">
                     CredPal is a revolutionary credit solution geared towards
                     providing seamless credit access for businesses and
                     individuals across developing economies.
                  </p>
               </li>
            </ul>
         </div>
         <div className="flex w-2/3  justify-between">
            <ul>
               <li>
                  <h2 className="font-[500] text-[16px] leading-[]">Product</h2>
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  CredPal Personal
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  CredPal Business
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  CredPal Lifestyle
               </li>
            </ul>{' '}
            <ul>
               <li>
                  <h2 className="font-[500] text-[16px] leading-[]">Legal</h2>
               </li>

               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  Customer Terms of use
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  Merchant Terms of service
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  Privacy Notice
               </li>
            </ul>{' '}
            <ul>
               <li>
                  <h2 className="font-[500] text-[16px] leading-[24px]">
                     Support
                  </h2>
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  FAQs
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  Blog
               </li>
            </ul>{' '}
            <ul>
               <li>
                  <h2 className="font-[500] text-[16px] leading-[]">
                     Contact Us
                  </h2>
               </li>

               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  hello@credpal.com
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  +234 708 740 9746
               </li>
            </ul>{' '}
            <ul>
               <li>
                  <h2 className="font-[500] text-[16px] leading-[]">
                     Get the app
                  </h2>
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  <img src={applestore} alt="apple store" />
               </li>
               <li className="mt-5 font-[400] text-[12px] leading-[26px]">
                  <img src={googleplay} alt="google-play-store" />
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Footer;
