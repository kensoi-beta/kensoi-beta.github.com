import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import "./components/app.css"
import "./components/colors.css"
import {useEffect, useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {ExamplePage} from './pages/Example'
import {TumbletTest} from './pages/TumbletTest'
import {NotFound} from './pages/NotFound'


function App() {
  const [headerState, setHeaderState] = useState(true);
  const [fcState, setFcState] = useState(true);
  let dmStartValue = localStorage.getItem("colormode");

  const [dm, setDm] = useState(dmStartValue == null ? "a" : dmStartValue); // "a" is auto; "l" is light; "d" is dark
  
  useEffect(
    () => {
      localStorage.setItem("colormode", dm);
      switch(dm) {
        case "l": 
          document.body.classList.add("light");
          document.body.classList.remove("dark");
          document.body.classList.remove("auto");
          break;
        case "d": 
          document.body.classList.remove("light");
          document.body.classList.add("dark");
          document.body.classList.remove("auto");
          break;
        default: 
          document.body.classList.remove("light");
          document.body.classList.remove("dark");
          document.body.classList.add("auto");
          break;
      }
    }, [dm]
  )
  const toolkit = {
    headerState: headerState,
    setHeaderState: setHeaderState,
    fcState: fcState, 
    setFcState: setFcState,
    dm: dm, 
    setDm: setDm
  }
  
  return (
    <div>
      <Header toolkit = {toolkit}/>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<ExamplePage />} />
          <Route exact path="/tumblet/" element={<TumbletTest />} />
        </Routes>
      </BrowserRouter>
      <Footer toolkit = {toolkit}/>
    </div>
  );
}
export default App;
