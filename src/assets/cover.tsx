interface coverProps{
    onNext: () => void;
}
export default function Cover({onNext}:coverProps){

    return(
        <div className="bg-bgs bg-cover h-screen flex items-center justify-center">
            <div className="grid grid-cols-2 items-center gap-4 w-2/3 h-2/3  py-6 px-4">
                <div className="font-mitr text-3xl text-center block items-center justify-center">
                    <p> Happy Aniversary kub babe</p>
                    <p>Love U mumu</p>   
                    <div className="flex items-center justify-center w-full py-6">
                        <img src="/coverp.png" className="w-2/5 h-2/5 shadow-lg" />
                    </div>
                </div>
                <div className="bg-cov bg-cover h-full  rounded shadow-lg cursor-pointer" onClick={onNext}>
                    
                </div>
            </div> 
        </div>
    );
}