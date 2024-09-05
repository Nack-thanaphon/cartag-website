import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import NavigatorBar from "@/components/NavigatorBar";
import Department from "@/components/Department";
import NewArea from "@/components/NewArea";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-auto h-screen">
        <span className="loading loading-dots loading-xs"></span>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Header />
      <Hero />
      <div className="container mx-auto mb-[10px] sm:block hidden">
        <NavigatorBar />
      </div>
      <div className="container mx-auto sm:mb-[10px] sm:block hidden">
        <Slider />
      </div>
      <div className="container mx-auto mb-[10px] p-2">
        <Department  />
      </div>
      <div className="container mx-auto mb-[10px]  p-2">
        <NewArea  />
      </div>
      
    </div>
  );
}
