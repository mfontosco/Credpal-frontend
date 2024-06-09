import BannerScreen from './pages/BannerScreen';
import CardsScreen from './pages/CardsScreen';
import CreditBuilderScreen from './pages/CreditBuilderScreen';
import HeaderScreen from './pages/HeaderScreen.jsx/HeaderScreen';
import JoinCredalTodayScreen from './pages/JoinCredalTodayScreen';
import PaymentScreen from './pages/PaymentScreen';
import SavingsScreens from './pages/SavingsScreens';
import VirtualCardScreen from './pages/VirtualCardScreen';

function App() {
   return (
      <>
         <div>
            <HeaderScreen />
            <PaymentScreen />
            <SavingsScreens />
            <VirtualCardScreen />
            <CreditBuilderScreen />
            <CardsScreen />
            <BannerScreen />
            <JoinCredalTodayScreen />
         </div>
      </>
   );
}

export default App;
