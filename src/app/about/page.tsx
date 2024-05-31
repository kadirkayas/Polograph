import { Footer } from "@/components/Footer";
import Line from "@/components/Line";
import { NavbarComponent } from "@/components/Navbar";

export default function About() {
    return (
        <div className="about p">
            <NavbarComponent/>
            <div className="mx-20 mb-16">
                <div className="mt-32 text-center text-4xl md:text-5xl lg:text-7xl tracking-tighter">
                    <div>
                        <p className="font-serif ">Contrairement opinion</p>
                    </div>
                    <div>
                        <p className="font-font-sans">Plusieurs variations</p>
                    </div>
                </div>
                <Line/>
                <div>
                    <div className="w-3/4 mx-auto my-14 text-center">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">D'où vient-il?</p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-medium ">
                            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
                        </p>
                    </div>
                </div>
                <Line/>
                <div className="w-3/4 mx-auto my-14 text-center">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold">Mais la majeure</p>
                </div>
                <Line/>
                <div>
                    <div className="w-3/4 mx-auto my-14 text-center">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium font-mono  lg:leading-3rem">
                    Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte.
                    Tous les générateurs de Lorem Ipsum sur Internet tendent à
                    </p>
                    <div className="flex justify-center ">
                            <button className="h-10 mt-10 flex justify-center items-center border border-black  py-6 px-5">
                                <div >
                                    <p className="text-sm mr-3">Contanct</p>
                                </div>
                                <div>   
                                    <svg height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                     viewBox="0 0 227.096 227.096" >
                                    <g>
                                    <g>
                                    	<polygon  points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 
                                        146.933,181.902 152.835,187.811 227.096,113.55 		"/>
                                    	</g>
                                    </g>
                                    </svg>
                                </div>
                            </button>
                        </div>
                     
                </div>
                 
                 <div className="border border-black mx-20">
                  </div>
                <div >
                    <div className="w-3/4 md:w-3/5 mx-auto mt-20 font-mono">
                        <p className="text-sm md:text-xl">
                            Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur,  
                        </p>
                        <p className="text-sm md:text-xl mt-5">
                        Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.
                        </p>
                        <div className="mt-5">
                            <a className=" text-xl underline" href="">Connect With Me..</a>
                        </div>
                    </div>
                </div>
                 </div>
            </div>
            <Footer/>
        </div>
    );
}