import React from "react";
import Cards from "./components/Cards/Cards";
import { RowCardsData,ColCardsData } from "./data/Data";
const App = () => {
  return (
    <div className=" min-h-screen flex flex-col  gap-4 font-Nunito bg-gray-300 ">
      {/* <Cards CardsData={CardsData}  direction={'row'} width={'full'}  /> */}
      {/* <Cards CardsData={CardsData} direction={"default"} width={"default"} /> */}
      <div className="grid grid-cols-1 p-6 gap-4">
        {RowCardsData.map((card) => (
          <Cards
            card={card}
            direction={"row"}
            width={"full"}
            key={card.id}
          />
        ))}
        <div className="grid  md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4  gap-4">
        {ColCardsData.map((card) => (
          <Cards
            card={card}
            direction={"default"}
            width={"default"}
            key={card.id}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default App;
