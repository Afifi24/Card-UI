import React from "react";
import Card from "./components/Cards/Card";
import { RowCardsData,ColCardsData } from "./data/Data";
const App = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center p-6  gap-4 font-Nunito bg-gray-300 ">
      <div className="grid grid-cols-1   gap-4">
        {RowCardsData.map((data) => (
          <Card
            data={data}
            direction={"row"}
            key={data.id}
          />
        ))}
       
    

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {ColCardsData.map((data) => (
          <Card
            data={data}
            key={data.id}
          />
        ))}
        </div>
    </div>
  );
};

export default App;
