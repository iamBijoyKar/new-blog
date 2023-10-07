import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {AiFillCaretRight} from 'react-icons/ai'

export default function Hero() {
  return (
    <div className="flex flex-col items-center my-[2rem] md:my-[4rem] ">
      <Typography variant="h1" className="text-white text-center">
        Welcome to My Blog
      </Typography>
      <Typography variant="h5" className="text-[#FE7BE5] text-center mt-2">
        Learn | Code | Build
      </Typography>
      <Typography
        variant="h6"
        className="text-[#ffffff] text-center my-4 w-[320px] sm:w-[500px] md:w-[600px] "
      >
        Learn about the latest technologies and build your own projects. Learn
        about Full Stack Developemt, Machine Learning, Data Science, Best
        Practices while development and much more.
      </Typography>
      <Button size="lg" color="purple" className="rounded-full" >
        <Typography variant="h5" className="text-white flex items-center capitalize gap-2 ">
          Get Started <AiFillCaretRight className="text-2xl"/> 
        </Typography>
      </Button>
    </div>
  );
}
