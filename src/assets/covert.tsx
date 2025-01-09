interface covertProps{
    onNext: () => void;
}
export default function Covert({ onNext }: covertProps) {
    return (
        <div className="bg-bgs bg-cover bg-opacity-75 h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-75 backdrop-filter backdrop-blur-sm "></div>
            <div className="bg-cov  rounded-md p-6 shadow-md w-1/3 h-2/3 z-10 flex flex-col items-center justify-center cursor-pointer" onClick={onNext}>
                <h1 className="text-white text-3xl font-mitr mt-2">Happy Anniversary kub babe</h1>
                <p className="text-white text-3xl font-mitr mt-2">Love U mumu</p>
                <div className="flex items-center justify-center mt-6">
                    <img src="/coverp.png" alt="Cover" className="w-3/6 h-auto shadow-lg" />
                </div>
            </div>
        </div>
    );
}
