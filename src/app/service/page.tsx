import { Footer } from "@/components/Footer";
import { NavbarComponent } from "@/components/Navbar";


export default function Service() {
    return (
        <>
        <div className="service">
            <NavbarComponent/>
            <div className="grid grid-cols-12 mx-16 md:mb-20 font-mono">
                <div className="col-span-12 md:col-span-6 md:border-r border-black">

                    <div className="border-b border-black p-10">
                        <div className="h-28rem pt-36 text-xl">
                            <h1 className="text-4xl py-5">Édition</h1>
                            <p className="py-3">Donnez une pause à vos yeux. Que vous ayez besoin d'une relecture rapide ou d'une révision approfondie, nous sommes là pour vous.</p>
                            <div className="flex items-center ml-2 text-lg " >
                                <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <defs></defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-299.000000, -280.000000)" fill="#000000">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M264,138.586 L262.5153,140 L258.06015,135.758 L259.54485,134.343 L264,138.586 Z M251.4,134 C247.9266,134 245.1,131.309 245.1,128 C245.1,124.692 247.9266,122 251.4,122 C254.8734,122 257.7,124.692 257.7,128 C257.7,131.309 254.8734,134 251.4,134 L251.4,134 Z M251.4,120 C246.7611,120 243,123.582 243,128 C243,132.418 246.7611,136 251.4,136 C256.0389,136 259.8,132.418 259.8,128 C259.8,123.582 256.0389,120 251.4,120 L251.4,120 Z" id="search_left-[#1504]">
                                    </path></g></g></g>
                                </svg>
                                <p className="ml-2 text-lg text-thin">Proofreading</p>
                            </div>
                            <div className="flex items-center ml-2">
                                <svg fill="#000000" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 612.001 612.001" >
                                    <path d="M591.86,179.158L432.915,20.212c33.164-33.164,95.625-24.465,139.517,19.426C616.325,83.532,625.026,145.993,591.86,179.158
	                                z M462.818,84.489l-47.094-47.094L80.181,372.939l47.094,47.094L462.818,84.489z M509.918,131.591l-29.434-29.435L144.939,437.702
	                                l29.434,29.435L509.918,131.591z M192.03,484.789l47.094,47.094l335.544-335.544l-47.094-47.094L192.03,484.789z M25.219,517.021
	                                c2.26,17.493,10.2,33.998,23.018,46.814c12.819,12.819,29.32,20.759,46.816,23.016l127.422-38.312L63.53,389.597L25.219,517.021z
	                                 M12.882,558.053L0.513,599.198l0.004,0.004c-1.016,3.117-0.671,6.378,2.289,9.337c2.96,2.958,6.947,4.031,10.064,3.016l0.005,0.005
	                                l41.18-12.382c-8.5-4.723-16.423-10.626-23.48-17.682C23.524,574.446,17.602,566.544,12.882,558.053z"/>
                                </svg>
                                <p className="ml-2 text-lg text-thin">Copyediting</p>
                            </div>
                            <div className="flex items-center ml-2 text-lg text-thin">
                                <svg fill="#000000" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.27 214.27" >
                                <g>
	                                <path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01
	                                	c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5
	                                	c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414
	                                	c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812
	                                	c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285
	                                	c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812
	                                	z"/>
	                                <path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607
	                                	l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5
	                                	c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z"/>
                                </g>
                                </svg>
                                <p className="ml-2 ">Fact checking</p>
                            </div>
                            
                            
                            
                        </div>
                    </div>


                    <div className="border-b border-black p-10">
                        <div className="h-28rem pt-36 text-xl">
                            <h1 className="text-4xl py-5">Mais S'est </h1>
                            <p className="py-3">depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais.</p>
                            <div className="flex items-center ml-2 text-lg text-thin" >
                                <svg width="20px" height="20px" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="icon" fill="#000000" transform="translate(64.000000, 58.823665)">
                                        <path d="M384,175.843 L384,197.176335 C384,267.868783 326.692448,325.176335 256,325.176335 L256,325.176335 L97.849,325.176 L136.836556,364.18278 L106.666667,394.352669 L16.1569987,303.843001 L106.666667,213.333333 L136.836556,243.503223 L97.849,282.509 L256,282.509668 C302.657016,282.509668 340.56834,245.064914 341.321901,198.587477 L341.333333,197.176335 L341.333,175.843 L384,175.843 Z M277.333333,1.42108547e-14 L367.843001,90.509668 L277.333333,181.019336 L247.163444,150.849447 L286.15,111.843 L128,111.843001 C81.3429843,111.843001 43.4316597,149.287756 42.6780989,195.765192 L42.6666667,197.176335 L42.666,218.509 L1.42108547e-14,218.509 L1.42108547e-14,197.176335 C-8.42864619e-15,127.190811 56.1671317,70.3238242 125.883286,69.193483 L128,69.1763347 L286.151,69.176 L247.163444,30.1698893 L277.333333,1.42108547e-14 Z" id="Rectangle"></path></g></g>
                                </svg>
                                <p className="ml-2 ">Quick feedback</p>
                            </div>
                            <div className="flex items-center ml-2 ">
                            <svg height="20px" width="20px"  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512"  >
                                <g><path d="M255.994,0.006C114.607,0.013,0.012,114.612,0,256c0.012,141.387,114.607,255.986,255.994,255.994
	                                    	C397.393,511.986,511.992,397.387,512,256C511.992,114.612,397.393,0.013,255.994,0.006z M97.607,97.612
	                                    	c23.34-23.328,51.761-41.475,83.455-52.725c-15.183,18.375-27.84,41.906-37.757,69.116H82.772
	                                    	C87.452,108.308,92.396,102.824,97.607,97.612z M65.612,138.003h69.986c-9.008,31.929-14.41,67.834-15.363,105.997H32.327
	                                    	C34.374,205.196,46.3,169.088,65.612,138.003z M65.612,373.997C46.3,342.912,34.374,306.804,32.327,268h87.991
	                                    	c0.961,38.124,6.21,74.092,15.206,105.998H65.612z M97.607,414.386c-5.211-5.211-10.156-10.695-14.836-16.39h60.573
	                                    	c4.28,11.774,9.019,22.944,14.312,33.21c6.954,13.438,14.758,25.468,23.348,35.89C149.332,455.846,120.931,437.699,97.607,414.386z
	                                    	 M243.998,479.667c-3.746-0.196-7.469-0.477-11.164-0.86c-5.89-2.64-11.722-6.25-17.5-10.961
	                                    	c-17.632-14.359-33.976-38.671-46.398-69.85h75.061V479.667z M243.998,373.997h-83.436c-9.477-31.171-15.316-67.311-16.328-105.998
	                                    	h99.763V373.997z M243.998,244H144.31c1.008-38.71,6.875-74.819,16.359-105.997h83.33V244z M243.998,114.003h-74.951
	                                    	c3.109-7.79,6.367-15.312,9.934-22.195c10.64-20.625,23.17-36.89,36.354-47.656c5.777-4.71,11.609-8.32,17.5-10.96
	                                    	c3.695-0.382,7.417-0.664,11.164-0.859V114.003z M446.392,138.003c19.312,31.085,31.234,67.194,33.281,105.997h-87.991
	                                    	c-0.961-38.124-6.21-74.092-15.21-105.997H446.392z M414.393,97.612c5.211,5.211,10.156,10.696,14.836,16.391h-60.577
	                                    	c-4.281-11.773-9.023-22.945-14.312-33.21c-6.953-13.437-14.758-25.468-23.347-35.89C362.668,56.16,391.065,74.301,414.393,97.612z
	                                    	 M267.998,32.333c3.746,0.195,7.469,0.484,11.16,0.859c5.89,2.649,11.723,6.25,17.504,10.96
	                                    	c17.636,14.359,33.976,38.671,46.397,69.85h-75.061V32.333z M267.998,138.003h83.436c9.476,31.171,15.32,67.31,16.328,105.997
	                                    	h-99.764V138.003z M267.998,268h99.685c-1.007,38.71-6.874,74.818-16.359,105.998h-83.326V268z M296.661,467.846
	                                    	c-5.781,4.711-11.614,8.313-17.504,10.961c-3.691,0.375-7.414,0.664-11.16,0.86v-81.67h74.951
	                                    	c-3.109,7.789-6.367,15.312-9.933,22.195C322.376,440.816,309.845,457.081,296.661,467.846z M414.393,414.386
	                                    	c-23.336,23.328-51.764,41.476-83.459,52.725c15.187-18.375,27.835-41.905,37.757-69.115h60.538
	                                    	C424.548,403.692,419.604,409.176,414.393,414.386z M446.392,373.997h-69.998c9.008-31.929,14.414-67.842,15.367-105.998h87.912
	                                    	C477.626,306.804,465.704,342.912,446.392,373.997z"/>
                                    </g>
                            </svg>
                                <p className="ml-2 text-lg text-thin">Continuously Online</p>
                            </div>
                            <div className="flex items-center ml-2 text-lg text-thin">
                                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2,21h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5Zm13,8.5v5a.5.5,0,0,1-.5.5h-1v2L19,19H14.5a.5.5,0,0,1-.5-.5v-5a.5.5,0,0,1,.5-.5h8A.5.5,0,0,1,23,13.5Z"/></svg>
                                <p className="ml-2 ">Continuous contact</p>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>


                <div className="col-span-12 md:col-span-6">
                    <div className="border-b border-black p-10">
                        <div className="h-28rem pt-36 text-xl">
                            <h1 className="text-4xl py-5">Copywriting </h1>
                            <p className="py-3">On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme</p>
                       </div>
                    </div>
                    <div className="border-b border-black p-10">
                        <div className="h-28rem pt-36 text-xl">
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