interface twoProps{
    onNext: () => void;
    onBack: () => void;
}

export default function Two({onNext,onBack}:twoProps){
    return(
        <div className="bg-pink-300 h-screen flex items-center justify-center">
            <div className="grid grid-cols-2 items-center w-full h-2/3 max-w-4xl px-4">
                <div className="bg-pap bg-cover w-full h-full flex justify-end rounded shadow-lg cursor-pointer" onClick={onBack}>
                    <h1>Chapter 2</h1>
                    <h1>Too Romantic</h1>
                </div>
                <div className="bg-pap bg-cover w-full h-full flex justify-start rounded shadow-lg cursor-pointer" onClick={onNext}>
                </div>
            </div>
        </div>
    );
}