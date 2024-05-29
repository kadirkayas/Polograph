import { HomeSlider } from "@/components/HomeSlider";
import { NavbarComponent } from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <NavbarComponent />
    <div className="mt-64">
      <div className="text-8xl font-bold flex justify-start pl-16 mb-8">
        <h1>
          Lorem Ipsum
        </h1>
      </div>
      <div className="text-8xl flex justify-end pr-16">
        <h1>
          Lorem Ipsum
        </h1>
      </div>
    </div>
    <HomeSlider />
    </>
  );
}
