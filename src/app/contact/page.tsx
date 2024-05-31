import { Footer } from "@/components/Footer";
import { NavbarComponent } from "@/components/Navbar";

export default function Contact() {
    return (
        <>  
            <div className="home">
                <NavbarComponent/>
                    <div className="mx-16">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-5 text-center">
                                <h1 className="font-mono text-8xl mt-20 ">Contact</h1>
                                <p className="font-mono font-medium mt-7 px-10">Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard?</p>
                            </div>
                            <div className="col-span-12 md:col-span-7">
                                
                            <div className="text-black-600 text-base mx-20 mt-10" >
                                <p className="mb-3">Name</p>
                                <div className="flex">
                                    <input type="text" placeholder="Your Name" className="h-10 bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "/>
                                </div>
                            </div>
                            <div className="text-black-600 text-base mx-20 mt-10" >
                                <p className="mb-3">Email Address</p>
                                <div className="flex">
                                    <input type="textbox" placeholder="Your Email" className="h-10 bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "/>
                                    
                                </div>
                            </div>
                            <div className="text-black-600 text-base mx-20 mt-10" >
                                <p className="mb-3">How can we help?</p>
                                <div className="flex">
                                    <textarea
                                        className="bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "
                                        placeholder="Your Message" rows={10}
                                    ></textarea>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    );
}