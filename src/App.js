import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import Password from "./Components/Password/Password";
import Documents from "./Components/Documents/Documents";
import Udo from "./Components/Udo/Udo";
import s from "./main.css";


function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL} >

          <div className="app">
              <div className="app__content">
                  <Routes>
                      <Route path="/" element={<Main />}/>
                      <Route path="password" element={<Password />}/>
                      <Route path="documents" element={<Documents />}/>
                      <Route path="udo" element={<Udo />}/>


                  </Routes>
              </div>
          </div>
      </BrowserRouter >
  );
}

export default App;
