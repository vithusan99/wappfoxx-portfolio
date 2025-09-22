import { ArrowBigLeft, ArrowRight, Facebook, MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white px-6 md:px-16 lg:px-24 ">
      <div className="container grid grid-cols-1 md:grid-cols-9 gap-8 border-b border-gray-700 pb-10">
        <div className="md:col-span-3">
          <div className="flex items-center space-x-2">
            <a href="#">
              <img src="/wappfoxx-logo1.png" alt="wappfoxxlogo" className="w-[180px] h-[100%]" />
            </a>
          </div>
          <p>Stay connected with us</p>
          <div className="flex items-center bg-white rounded-full overflow-hidden max-w-xs p-1 mt-2">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 w-full text-black outline-none"
            />
            <button className="bg-orange-500 rounded-full text-white p-2 cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {["App", "Software", "Website", "SEO", "Graphics", "Marketing", "FAQ", "Templates", "Hosting", "Security"].map((link, i) => (
              <li key={i} className="hover:text-white cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Website Development",
              "App Development",
              "Software Solutions",
              "SEO & SEA",
              "Graphics & Animation",
              "Digital Marketing",
              "Templates",
              "Domain"
            ].map((service, i) => (
              <li key={i} className="hover:text-white cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="mb-2">Ready to build great products?</p>
          <h4 className="text-3xl font-bold mb-4 flex items-center gap-3">
            Let's Talk <span><MoveRight className="w-15 h-auto" /></span>
          </h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="bg-white p-2 rounded-full"><img src="/fb-vector.png" alt="facebook-svg" className="w-5 h-5 contain" /></a>
            <a href="#" className="bg-white p-2 rounded-full"><img src="/insta-vector.png" alt="instagram-svg" className="w-5 h-5 object-contain" /></a>
            <a href="#" className="bg-white p-2 rounded-full"><img src="/linkedin-vector.png" alt="linkedin-svg" className="w-5 h-5 object-contain" /></a>
            <a href="#" className="bg-white p-2 rounded-full"><img src="/x-vector.png" alt="x-svg" className="w-5 h-5 object-contain" /></a>
            <a href="#" className="bg-white p-2 rounded-full"><img src="/tiktok-vector.png" alt="tiktok-svg" className="w-5 h-5 object-contain" /></a>

          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm pt-6">
        <p>©2025 WappFoxx. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Terms & Service</a>
          <div className="text-gray-600 block">|</div>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
