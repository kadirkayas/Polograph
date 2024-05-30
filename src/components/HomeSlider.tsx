const array=[1,1,1,1,1,1,1,1,1,1]
export function HomeSlider() {
    return (
        <>

            <div className="grid grid-cols-3 mx-16 my-32 border-y  border-black font-mono ">
                <div className="sticky top-0 h-screen">
                    <div className=" text-3xl p-3"  >
                    Est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                    </div>
                    <div className="mt-3 text-black-600 text-base" >
                        <p className="mb-3">Mailing List</p>
                        <div className="flex">
                            <input type="text" value={"Your Email"} className="h-10 bg-transparent border border-black text-black text-sm font-thin p-2  w-80 "/>
                            <button className="h-10 flex justify-center items-center border border-black w-14">
                            <svg fill="#000000" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                            	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                            	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                            	C255,161.018,253.42,157.202,250.606,154.389z"/>
                            </svg>
                            </button>
                        </div>
                    </div> 
                </div>
                
                
                <div className="col-span-2 border-l border-black">
                    
                    
                    <div className=" border-b border-black ">
                        <p className="text-5xl mt-24 ml-10">Lorem Ipsum is simply dummy text of the printing and </p>
                        <div className="flex justify-end ">
                            <button className="h-10 mt-10 flex justify-center items-center border-t border-r border-l border-black  py-6 px-5">
                                <div >
                                    <p className="text-sm mr-3 ">About Us</p>
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

                    <div className=" border-b border-black ">
                        <div className="border-b border-black  ml-10 mb-0 mt-3 w-20 flex justify-center">
                            <h2 className="text-xl ">Services</h2>
                        </div>
                        <h1 className="text-4xl  mt-24 ml-10">On sait depuis</h1>
                        <p className="text-3xl mt-4 ml-10">Neque porro quisquam est </p>
                        <div className="flex justify-end ">
                            <button className="h-10 mt-10 flex justify-center items-center border-t border-r border-l border-black  py-6 px-5">
                                <div >
                                    <p className="text-sm mr-3">Learn More</p>
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

                    <div className=" border-b border-black h-80 flex flex-col justify-center items-center ">
                            <p className="text-9xl absolute text-transparent">Polograph</p>
                        
                        {
                            array.map(() => 
                            <div className="flex justify-center">
                                <p className="text-2xl font-bold ">
                                    l'imprimerie
                                </p>
                            </div>)
                        }
                    </div>

                    <div className="h-80 flex flex-col justify-center items-center border-b border-black">
                        <div className="p-4 flex flex-col justify-center ">
                            <p className="text-center text-xl font-medium">
                            "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte."

                            </p>
                            <div className="mt-14">
                                <p className="text-center text-sm font-semibold">-Kayas Kadir Owner</p>
                                <p className="text-center text-xs">CEO of Polograph</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-4xl  mt-24 ml-10">Copywriting</h1>
                        <p className="text-3xl mt-4 ml-10">De nombreuses suites logicielles de mise en page ou éditeurs </p>
                        <div className="flex justify-end ">
                            <button className="h-10 mt-10 flex justify-center items-center border-t border-r border-l border-black  py-6 px-5">
                                <div >
                                    <p className="text-sm mr-3">Learn More</p>
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
                </div>

            </div>
        </>
    );
}