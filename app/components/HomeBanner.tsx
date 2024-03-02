import Image from "next/image";
const HomeBanner = () => {
    return ( <div className="relative bg-gradient-to-r from-fuchsia-400 to-fuchsia-700 mb8">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
                <h1 className="text-4xl md:text-center font-bold text-white mb-4">Clearance Sale!</h1>
                <p className="text-lg md:text-xl text-white mb-2">Enjoy discouts on selected items</p>
                <p className="text-2xl md:text-5xl text-yellow-200 font-bold">GET upto 50% OFF</p>
            </div>
            <div className="w-1/3 relative aspect-video">
                <Image src="/banner-image.png" fill  alt="Banner Image" className="object-contain"/>
            </div>
        </div>
    </div> );
}
 
export default HomeBanner;