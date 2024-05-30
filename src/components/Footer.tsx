export function Footer() {
    return (
        <>
        <div>
            <div className="flex justify-center border-b-2 border-black mx-20 ">
                <p className="font-200 font-mono">Polograph</p>
            </div>
            <div className="flex justify-between mx-20 my-10">
                <p className="font-mono">Copyright 2022</p>
                <p className="font-mono">Whiting by Kadir Kayas</p>
                <div>
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