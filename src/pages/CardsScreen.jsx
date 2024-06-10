import Card2 from '../components/Cards/Card2';
import Card3 from '../components/Cards/Card3';
import Card4 from '../components/Cards/Card4';
import Cards from '../components/Cards/Cards';

const CardsScreen = () => {
   return (
      <div className="w-full gap-2 h-[350px] flex ">
         <Cards color={'#F6F0EF'} />
         <Card2 color={'#F4F1F7'} />
         <Card3 color={'#E8F4FF'} />
         <Card4 color={'#EBF1FF'} />
      </div>
   );
};

export default CardsScreen;
