interface homeProps{
    onNext: () => void;
}
export default function Home({onNext} : homeProps){
    return (
        <div className="bg-bgs bg-cover h-screen flex items-center justify-center">
          <div className="bg-white opacity-90 rounded-md p-6 shadow-md text-center z-10">
            <h1 className="text-2xl font-mitr mt-2">Are you ready to open (me) the gift ?</h1>
            <img src="/beargif.gif" alt="Bear Gif" className="my-4 w-32 h-auto mx-auto" />
            <button className="bg-pink-500 text-white py-2 px-10 rounded-md hover:bg-pink-600 transition" onClick={onNext}>
              Ready!
            </button>
          </div>
          <div className="absolute inset-0 bg-black opacity-75"></div>
          
        </div>
    );
} 