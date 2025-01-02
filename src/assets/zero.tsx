interface zeroProps{
    onNext: () => void;
    onBack: () => void;
}

export default function Zero({onNext , onBack}:zeroProps){
    return(
        <div className="grid grid-cols-2 items-center w-full h-2/3 max-w-4xl px-4">
            <div className="bg-pap bg-cover w-full h-full flex justify-end rounded shadow-lg cursor-pointer">

            </div>
            <div className="bg-pap bg-cover w-full h-full flex justify-start rounded shadow-lg cursor-pointer">
            </div>
        </div>
    );
}