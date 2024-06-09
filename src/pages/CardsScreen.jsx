import Cards from '../components/Cards/Cards';

const CardsScreen = () => {
   return (
      <div className="w-full h-[460px] flex border border-black">
         <Cards color={'#F6F0EF'} />
         <Cards color={'#F4F1F7'} />
         <Cards color={'#E8F4FF'} />
         <Cards color={'#EBF1FF'} />
      </div>
   );
};

export default CardsScreen;
