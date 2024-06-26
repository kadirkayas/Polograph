import { Footer } from "@/components/Footer";
import { HomeSlider } from "@/components/HomeSlider";
import { NavbarComponent } from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <div className="bg-home md:px-20">
      <NavbarComponent />
      <div className="mt-52 font-mono text-6xl md:text-7xl lg:text-8xl" >
        <div className="  font-bold flex justify-start pl-16 mb-8">
          <h1>Qu'est-ce que</h1>
        </div>
        <div className="flex justify-end pr-16">
          <h1>Où procurer</h1>
        </div>
      </div>
      <HomeSlider />
      <Footer />
    </div>
    </>
  );
}
