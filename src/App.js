import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import axios from './axios';
import Home from './Pages/Home';
import Agronomy from './Pages/Agronomy';
import Product from './Pages/Product';
import VisionMission from './Pages/VisionMission';
import ContactUs from './Pages/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activity from './Pages/Activity';
// import Agronomy from './Pages/Agronomy';
// import Home from './Pages/Home';
const api = "https://jsonplaceholder.typicode.com/todos/1"

function App() {
  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState("")

  // useEffect (()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos/1/posts")
  //   .then((res)=>setMyData(res.data))
  //   .catch((error)=>
  //   setIsError(error.message)  
  //   )
  // },[])
  // const getApiData=async (url)=>{
  const getApiData = async () => {
    try {
      // const res =await axios.get(url);
      const res = await axios.get("/posts");
      setMyData(res.data)
    }
    catch (error) { setIsError(error.message) }
  }

  // useEffect(()=>{getApiData(`${api}/posts`)},[]);



  return (
    // <>
    //   <h2>Axois get Data</h2>
    //   {isError != "" && <h2>{isError}</h2>}
    //   {myData.map((post) => {
    //     const { userId, id, title, body } = post
    //     return (
    //       <div className='' key={id}>
    //         {/* <h2>{userId}</h2> */}
    //         <h2>{id}</h2>
    //         <p>{title}</p>
    //         <p>{body}</p>
    //       </div>

    //     )
    //   })}
    // </>

    <div className="">

      <BrowserRouter>
        <div>
          <Header />
        </div>

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/agronomy' element={<Agronomy />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/activity' element={<Activity />}></Route>
          <Route path='/vision' element={<VisionMission />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
        </Routes>
        
        <div>
          <Footer />
        </div>
      </BrowserRouter>
      {/* <Home/>
      */}
    </div>
  );
}

export default App;
