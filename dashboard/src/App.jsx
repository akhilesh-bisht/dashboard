import React, { useState } from "react";
import Container from "./components/Container";
import FlexArrow from "./components/FlexArrow";
import SecButton from "./components/SecondRow";
import Button from "./components/Button";
import ArroComp from "./components/ArroComp";
import ThirdCom from "./components/ThirdCom";
import FourCom from "./components/FourCom";
import HoverButton from "./components/HoverButton";
import LastCom from "./components/LastCom";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="container w-full h-screen flex items-center justify-start mx-auto p-4 mt-10 m-auto">
        <Container />
        <Button setIsHovered={setIsHovered} />
        <FlexArrow />
        <ArroComp />
        <SecButton setIsHovered={setIsHovered} />
        <ThirdCom setIsHovered={setIsHovered} />
        <FourCom setIsHovered={setIsHovered} />
        <HoverButton isHovered={isHovered} />
        <LastCom />
      </div>
    </>
  );
};

export default App;
