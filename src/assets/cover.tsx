interface coverProps{
    onNext: () => void;
}
export default function Cover({onNext}:coverProps){

    return(
        <div className="grid grid-cols-2 items-center gap-4 w-2/3 h-2/3 max-w-4xl px-4">
            <div className="font-mitr text-3xl text-center">
                <p> Happy Aniversary kub babe</p>
                <p>Love U mumu</p>   
            </div>
            <div className="bg-cov bg-contain h-full flex justify-end rounded shadow-lg cursor-pointer" onClick={onNext}>
                
            </div>
        </div> 
    );
}