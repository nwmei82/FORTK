import { useState } from "react";
import Home from "./assets/home";
import Cover from "./assets/cover";
import Zero from "./assets/zero";
import One from "./assets/one";
import Two from "./assets/two";
import Three from "./assets/three";

export default function App() {
  const [ currentPage, setPage] = useState(0);
  const onNext = () => {
    if(currentPage < 12 ){
      setPage(currentPage+1);
    }
  }
  const onBack = () => {
    if(currentPage > 1) {
      setPage(currentPage-1);
    }
  }
  const renderPage = () => {
    switch (currentPage) {
        case 0:
            return <Home onNext={onNext}/>
        case 1:
            return <Cover onNext={onNext}/>
        case 2:
            return <Zero onNext={onNext} onBack={onBack}/>
        case 3:
            return <One onNext={onNext} onBack={onBack}/>
        case 4:
            return <Two onNext={onNext} onBack={onBack}/>
        case 5:
            return <Three onNext={onNext} onBack={onBack}/>
    }

}

  return(
    <div className="h-screen">
      {renderPage()}
    </div>
  ); 
}