export default function Form() {
    return (
        <>
        <div className="md:mx-20">
            <div className="text-black-600 text-base  mt-10" >
                <p className="mb-3">Name</p>
                <div className="flex">
                    <input type="text" placeholder="Your Name" className="h-10 bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "/>
                </div>
            </div>
            <div className="text-black-600 text-base mt-10" >
                <p className="mb-3">Email Address</p>
                <div className="flex">
                    <input type="textbox" placeholder="Your Email" className="h-10 bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "/>

                </div>
            </div>
            <div className="text-black-600 text-base mt-10" >
                <p className="mb-3">How can we help?</p>
                <div className="flex">
                    <textarea
                        className="bg-transparent placeholder border border-black text-black text-sm font-light p-2 w-full focus:outline-none focus:ring-0 "
                        placeholder="Your Message" rows={10}
                    ></textarea>
                </div>
            </div>
        </div>
        </>
    )
}