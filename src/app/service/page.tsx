import { Footer } from "@/components/Footer";
import { NavbarComponent } from "@/components/Navbar";
import { IconCheckBook, IconCustomer, IconCycle, IconPencil, IconSearch, IconWorld } from "../public/svgimage";


export default function Service() {
    return (
        <>
        <div className="bg-service  px-2 md:px-20">
            <NavbarComponent/>
            <div className="grid grid-cols-12 mx-16 md:mb-20 font-mono">
                <div className="col-span-12 md:col-span-6 md:border-r border-black">
                    <div className="border-b border-black md:p-10">
                        <div className="pb-5 pt-20 md:pt-36 text-xl">
                            <h1 className="text-4xl py-5">Édition</h1>
                            <p className="py-3">Donnez une pause à vos yeux. Que vous ayez besoin d&aposune relecture rapide ou d&aposune révision approfondie, nous sommes là pour vous.</p>
                            <div className="flex items-center m-2 text-lg " >
                                <IconSearch/>
                                <p className="ml-2 text-lg text-thin">Proofreading</p>
                            </div>
                            <div className="flex items-center m-2">
                               <IconPencil/>
                                <p className="ml-2 text-lg text-thin">Copyediting</p>
                            </div>
                            <div className="flex items-center m-2 text-lg text-thin">
                                <IconCheckBook/>
                                <p className="ml-2 ">Fact checking</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-black md:p-10">
                        <div className="pb-6 pt-20 md:pt-36 text-xl">
                            <h1 className="text-4xl py-5">Mais S&aposest </h1>
                            <p className="py-3">depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n&aposa pas fait que survivre cinq siècles, mais.</p>
                            <div className="flex items-center m-2 text-lg text-thin" >
                                <IconCycle/>
                                <p className="ml-2 ">Quick feedback</p>
                            </div>
                            <div className="flex items-center m-2 ">
                                <IconWorld/>
                                <p className="ml-2 text-lg text-thin">Continuously Online</p>
                            </div>
                            <div className="flex items-center m-2 text-lg text-thin">
                                <IconCustomer/>
                                <p className="ml-2 ">Continuous contact</p>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 ">
                    <div className="border-b border-black md:p-10">
                        <div className="pb-16 pt-20 md:pt-40 text-xl">
                            <h1 className="text-4xl py-5">Copywriting </h1>
                            <p className="py-3">On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme</p>
                       </div>
                    </div>
                    <div className="border-b border-black md:p-10">
                        <div className="pb-24 pt-20 md:pt-40 text-xl">
                            <h1 className="text-4xl py-5">Collaboration </h1>
                            <p className="py-3">Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. </p>
                       </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     </>
    );
}