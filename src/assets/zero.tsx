interface zeroProps{
    onNext: () => void;
    onBack: () => void;
}

export default function Zero({onNext , onBack}:zeroProps){
    return(
        <div className="bg-bgt6 bg-cover h-screen flex items-center justify-center">
            <div className="grid grid-cols-2 items-center w-2/3 h-2/3 px-4">
                <div className="bg-pap bg-cover w-full h-full flex justify-end rounded shadow-lg cursor-pointer" onClick={onBack}>
                    <div className="w-full h-full font-mitr text-3xl text-center flex flex-col  items-center justify-center">
                        <p className="pb-4">Chapter 0</p>
                        <p className="pb-4 font-bold">" Flirting "</p>
                        <p className="font-athiti font-bold pb-2 px-8">ขอบคุณที่วันนั้นเราเปิดใจคุยกันตรงๆ</p>
                        <p className="font-athiti font-bold pb-4 px-8">ขอบคุณที่จีบตอนเค้าในตอนที่เค้าเปิดโอกาสให้จีบนะ52765347812</p>
                    </div> 
                </div>
                <div className="bg-pap bg-cover w-full h-full flex justify-start rounded shadow-lg cursor-pointer" onClick={onNext}>
                    <div className="flex items-center justify-center">
                        <img src="/p0.jpg" className="w-4/6 h-auto shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}