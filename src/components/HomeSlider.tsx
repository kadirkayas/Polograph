import { IconArrow, IconSmallArrow } from "@/app/public/svgimage";

const array=[1,1,1,1,1,1,1,1,1,1]
export function HomeSlider() {
    return (
        <>
            <div className="grid grid-cols-3 mx-6 md:mx-16 mt-32 border-y  border-black font-mono ">
                <div className="sticky top-0 h-screen hidden md:block">
                    <div className="p-3 md:text-3xl lg:text-4xl"  >
                    Est le faux texte standard de l;
                    imprimerie depuis les années 1500, quand un l'imprimeur anonyme assembla
                    </div>
                    <div className="mt-3 text-black-600 text-base mr-1" >
                        <p className="mb-3 text-xl">Mailing List</p>
                        <div className="flex">
                            <input type="text" placeholder="Your Email" className="h-10 bg-transparent  placeholder border border-black text-black text-sm font-thin p-2 w-80 focus:outline-none focus:ring-0 "/>
                            <button className="h-10 flex justify-center items-center border-b border-t border-r border-black w-14">
                            <IconSmallArrow/>  
                            </button>
                        </div>
                    </div> 
                </div>
                <div className="col-span-3 md:col-span-2 border-l border-r md:border-r-0 border-black">
                    <div className=" border-b border-black ">
                        <p className="text-3xl md:text-4xl mt-24 ml-10">Lorem Ipsum is simply dummy text of the printing and </p>
                        <div className="flex justify-end ">
                            <button className="h-10 mt-10 flex justify-center items-center border-t md:border-r border-l border-black py-7 px-9 ">
                                <div >
                                    <p className="text-sm mr-3 ">About Us</p>
                                </div>
                                <div>   
                                    <IconArrow />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className=" border-b border-black ">
                        <div className="border-b border-black  ml-10 mt-3 w-20 flex justify-center">
                            <h2 className="text-xl ">Services</h2>
                        </div>
                        <h1 className="text-3xl md:text-4xl  mt-24 ml-10">On sait depuis</h1>
                        <p className="text-3xl mt-4 ml-10">Neque porro quisquam est </p>
                        <div className="flex justify-end ">
                            <button className="h-10 mt-10 flex justify-center items-center border-t md:border-r border-l border-black py-7 px-9 ">
                                <div >
                                    <p className="text-sm mr-3">Learn More</p>
                                </div>
                                <div>   
                                    <IconArrow />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className=" border-b border-black h-80 flex flex-col justify-center items-center ">
                            <p className="text-7xl md:text-9xl absolute text-transparent">Polograph</p>
                        {
                            array.map(() => 
                            <div className="flex justify-center">
                                <p className="text-2xl font-bold ">
                                    l&apos;imprimerie
                                </p>
                            </div>)
                        }
                    </div>

                    <div className="h-80 flex flex-col justify-center items-center border-b border-black">
                        <div className="p-4 flex flex-col justify-center ">
                            <p className="text-center text-xl font-medium">
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L&aposavantage du Lorem Ipsum sur un texte générique comme &aposDu texte.

                            </p>
                            <div className="mt-14">
                                <p className="text-center text-sm font-semibold">-Kayas Kadir Owner</p>
                                <p className="text-center text-xs">CEO of Polograph</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl  mt-32  ml-10">Copywriting</h1>
                        <p className="text-2xl md:text-3xl mt-4 ml-10">De nombreuses suites logicielles de mise en page ou éditeurs </p>
                        <div className="flex justify-end ">
                            <button className="h-10 mt-10 flex justify-center items-center border-t md:border-r border-l border-black py-7 px-9 ">
                                <div >
                                    <p className="text-sm mr-3">Learn More</p>
                                </div>
                                <div>   
                                    <IconArrow />
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
 
            <div className="text-black-600 text-base mx-6 md:mx-20 mt-10 sm:hidden" >
                <p className="mb-3">Mailing List</p>
                <div className="flex">
                    <input type="text" placeholder="Your Email" className="h-10 bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "/>
                    <button className="h-10 flex justify-center items-center border-b border-t border-r border-black w-20">
                    <IconSmallArrow />
                    </button>
                </div>
            </div>
        
        </>
    );
}