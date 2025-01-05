interface zeroProps{
    onNext: () => void;
    onBack: () => void;
}

export default function Zero({onNext , onBack}:zeroProps){
    return(
        <div className="bg-pink-300 h-screen flex items-center justify-center">
            <div className="grid grid-cols-2 items-center w-2/3 h-2/3 px-4">
                <div className="bg-pap bg-cover w-full h-full flex justify-end rounded shadow-lg cursor-pointer" onClick={onBack}>
                    <div className="w-full h-full font-mitr text-3xl text-center">
                        <p>Chapt 0</p>
                        <p>Flirting</p>
                    </div> 
                </div>
                <div className="bg-pap bg-cover w-full h-full flex justify-start rounded shadow-lg cursor-pointer" onClick={onNext}>
                </div>
            </div>
        </div>
    );
}