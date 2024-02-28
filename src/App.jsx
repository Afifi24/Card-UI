import React from "react";
import image1 from "./assets/villa.jpg";
import image2 from "./assets/image1.jpg";
import image3 from "./assets/image2.jpg";
import Cards from "./components/Cards/Cards";
const App = () => {
  return (
    <div className=" min-h-screen flex flex-col  gap-4 font-Nunito bg-gray-300 ">
      {/* <Cards image={image1} desc={'4-6 voyageurs: Logemenet entiere .5 Lits .3 Salles de bain Wifi.Cuisine. Parking Gratuit'} direction={'row'} width={'w-full'} country={'Rabat'} title={'Riad Villa'} stars={'4.99'} price={'300'} /> */}
      <Cards image={image1} desc={''} direction={'col'} width={'max-w-[400px]'} country={'Marrakech'} title={'Villa Massira'} stars={'3.16'} price={'150'} />
    </div>
  );
};

export default App;
