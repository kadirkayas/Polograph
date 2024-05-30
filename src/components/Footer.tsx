export function Footer() {
    return (
        <>
        <div>
        <div className="flex justify-center border-b-2 border-black mx-4 sm:mx-8 md:mx-16 lg:mx-20">
            <p className="font-mono text-8rem sm:text-10rem md:text-10rem lg:text-12rem xl:text-14rem">Polograph</p>
        </div>
            <div className="flex justify-between mx-20 my-10 flex-col  sm:flex-row">
                <p className="font-mono text-center">Copyright 2024</p>
                <p className="font-mono text-center">Whiting by Kadir Kayas</p>
                <div className="flex justify-center">
                    <a href="" className="footer-link">Home</a>
                    <a href="" className="footer-link">About</a>
                    <a href="" className="footer-link">Service</a>
                    <a href="" className="footer-link">Contact</a>
                </div>
            </div>
        </div>
        </>
    );
}