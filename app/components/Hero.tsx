import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5.5rem)] md:-mt-[10px] text-white bg-black  px-6 
    md:bg-black md:px-8 relative">
         {/* bg-[url('/wappfoxx-bg1.png')] bg-no-repeat 
         bg-[length:80%_75%] bg-[position:120%_52%] md:bg-none */}
      {/* back ground img  */}
      <div className="absolute z-1 bottom-0  left-0 w-full h-[40%] md:h-[20%] bg-gradient-to-t
       from-orange-500/40 to-transparent"></div>
       
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5.5rem)] md:min-h-[calc(100vh-4.5rem)] md:grid md:grid-cols-7 flex justify-center md:overflow-hidden items-center">
        <div className="md:col-span-3 z-2 flex flex-col space-y-4 md:space-y-5 ">
          <div className="md:inline-flex items-center text-sm space-x-2 bg-gray-800/50 backdrop-blur-sm 
          rounded-full px-2 py-1 border-[#ffffff51] border-l-[1px] border-b-[1px] border-solid">
            <div className="flex items-center justify-center space-x-2">
              <span className="rounded-full bg-orange-500  ">
                <Star className="w-5 h-5 p-1 fill-white" />
              </span>
              <span className=" text-gray-300">250+ Projects Delivered</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
            <div className="text-gray-600 hidden md:block">|</div>
            <span className=" text-gray-300">5/5 Client Reviews</span>
            <div className="text-gray-600 hidden md:block">|</div>
            <span className="text-gray-300">10M+ Impressions</span>
          </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug ">
            Digital Solutions Made <br className="hidden md:block" /> Simple & Affordable
          </h1>
          <p className=" text-[#6C6C6C] text-base md:text-lg">
            From websites to apps, hosting to marketing — WappFoxx combines transparency, speed,
            and reliability to power your digital success.
          </p>
          <button className="mt-6 md:mt-10 w-[80%] md:max-w-70 md:mx-0 bg-orange-500 px-3 md:px-6 py-2 md:py-3 rounded-4xl text-base md:text-lg cursor-pointer">
            Explore Price Calculator
          </button>
        </div>
        <div className="md:col-span-4 hidden md:flex items-end justify-end relative h-full overflow-hidden">
        <div className="relative w-[630px] h-[calc(100vh-4.5rem)] flex items-end">
          <img src="/wappfoxx-wallbg.png" alt="hero-img" className="w-full h-auto object-cover object-bottom transform translate-y-0"
          style={{ 
            minHeight: 'calc(100vh - 4.5rem)',
            maxHeight: 'none'
          }} />
        </div>
        </div>
      </div>

    </section>
  );
}
