import { useState } from "react";
import Home from "./assets/home";
import Cover from "./assets/cover";
import Czero from "./assets/Czero";
export default function App() {
  const [ currentPage, setPage] = useState(0);
  const onNext = () => {
    if(currentPage < 12 ){
      setPage(currentPage+0.5);
    }
  }
  const onBack = () => {
    if(currentPage > 0) {
      setPage(currentPage-1);
    }
  }
  const renderPage = () => {
    switch (currentPage) {
        case 0:
            return <Home onNext={onNext}/>
        case 0.5:
            return <Cover onNext={onNext}/>
        case 1:
            return <Czero onNext={onNext}/>
    }

}

  return(
    <div>
      {renderPage()}
    </div>
  ); 
}