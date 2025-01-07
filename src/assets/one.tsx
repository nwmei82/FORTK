interface oneProps{
    onNext: () => void;
    onBack: () => void;
}

export default function One({onNext,onBack}:oneProps){
    return(
        <div className="bg-bgt5 bg-cover h-screen flex items-center justify-center">
            <div className="grid grid-cols-2 items-center w-2/3 h-2/3 px-4">
                <div className="bg-pap bg-cover w-full h-full flex justify-end rounded shadow-lg cursor-pointer" onClick={onBack}>
                    <h1>Chapter 1</h1>
                    <h1>Start</h1>
                </div>
                <div className="bg-pap bg-cover w-full h-full flex justify-start rounded shadow-lg cursor-pointer" onClick={onNext}>
                </div>
            </div>
        </div>
    );
}