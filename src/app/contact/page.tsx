import { Footer } from "@/components/Footer";
import { NavbarComponent } from "@/components/Navbar";
import Form from "./form";

export default function Contact() {
    return (
        <>  
            <div className="bg-contact px-2 md:px-20">
                <NavbarComponent/>
                    <div className="mx-16">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-5 text-center">
                                <h1 className="font-mono text-8xl mt-20 ">Contact</h1>
                                <p className="font-mono font-medium mt-7 md:px-10">Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard?</p>
                            </div>
                            <div className="col-span-12 md:col-span-7">
                                <Form/>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    );
}