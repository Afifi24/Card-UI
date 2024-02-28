import React from "react";
import Cards from "./components/Cards/Cards";
import Slide from './components/Slide/Slide.jsx'
const App = () => {
  return (
    <div className=" min-h-screen flex flex-col  gap-4 font-Nunito bg-gray-300 ">
      {/* <Cards image={image1} desc={'4-6 voyageurs: Logemenet entiere .5 Lits .3 Salles de bain Wifi.Cuisine. Parking Gratuit'} direction={'row'} width={'full'} country={'Rabat'} title={'Riad Villa'} stars={'4.99'} price={'300'} /> */}

      {/* <Cards image={image1} desc={''} direction={'default'} width={'default'} country={'Marrakech'} title={'Villa Massira'} stars={'3.16'} price={'150'} /> */}
      <Slide/>
      
    </div>
  );
};

export default App;
