import React from "react";
import image1 from "./assets/villa.jpg";
import image2 from "./assets/image1.jpg";
import image3 from "./assets/image2.jpg";
import Button from "./components/Buttons/Button";
import Cards from "./components/Cards/Cards";
const App = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-4 font-Nunito bg-gray-300 ">
      <Button size={"medium"} variant={"primary"}>
        Onclick
      </Button>
      <Cards image={image1} />
      <Cards image={image3} />
    </div>
  );
};

export default App;
