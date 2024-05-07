import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
 
// import App from "./App"
import Project from './Component/Project'
// import Arrystate from './Component/Arrystate';
import Name from './Component/Name';
import Birth from './Component/Birth';
import Names from './Component/Name';
import YupFrom from './Component/Yupfrom';
import Formprac from './Component/Formprac';
import Homework from './Component/Homework';
import Classcomp from './Component/ClassComp';
import Funcomp from './Component/Funcomp';
import FunRefs from './Component/Funrefs';
import ClssRef from './Component/ClssRef';
import List from './Component/List';
import Button from './Component/Button';

import HOCParent from './Component/HOCParent';

import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Component/Project/Home';
import About from './Component/Project/About';
import Course from './Component/Router/Course';
import Help from './Component/Router/Help';
import Error from './Component/Router/Error';
import Nav from './Component/Router/Nav';
import Practic from './Component/Practic';
import EmployeeHelp from './Component/Router/EmployeeHelp';
import { Otherhelp } from './Component/Router/Otherhelp';
import Dynamicuser from './Component/Router/Dynamicuser';
import LocalStorage from './Component/LocalStorage';
import LoginPage from './Component/Router/ProtectedRouting/LoginPage';
import PrivateRoutingpage from './Component/Router/ProtectedRouting/PrivateRoutingpage';
import Menu from './Component/Project/Menu';

import UseReducer from './Component/Hooks/UseReducer';
import UserContainer from './Component/Context/UserContainer';
import Contact from './Component/Project/Contact';
import Usememo from './Component/Hooks/Usememo';
import UseEffect from './Component/Hooks/UseEffect';
import Foodcart from './Component/Project/Foodcart';
import store from './Component/Store/store';
import { Provider } from 'react-redux';
import Getasynmethod from './Component/ApiClass/Getasyncmethod';
import Getmethod from './Component/ApiClass/Getmethod';
import Putmethod from './Component/ApiClass/Putmethod';
import Postmethod from './Component/ApiClass/Postmethod';
import Formvalidation from './Component/Formvalidation';
import Signin from './Component/Project/Signin';
import { configureStore } from '@reduxjs/toolkit';
import CountercompShow from './Component/CountercompShow';
// import Counter from './Component/Counter';
// import Counter from './Component/Project/CounterRon';
import Exam from './Component/Exam';
import Modal from './Component/Project/Modal';
import Placement from './Component/Placement';
import Place from './Component/Place';
import Getprac from './Component/ApiClass/Getprac';
import Postprac from './Component/ApiClass/Postprac';
import Delete from './Component/ApiClass/Delete';
import Place1 from './Component/Place1';
import Place2 from './Component/Placepost';
import Placepost from './Component/Placepost';
import Hardwork from './Component/ApiClass/Hardwork';
import Jason from './Component/Project/Jason';
import Getperson from './Component/Getperson';
// import CounterRon from './Component/Project/CounterRon';
// import { store } from './Component/redux/store';
import Machine from './Component/Machine';
import MachineTest from './Component/MachineTest';
import Interview from './Component/Interview';
import Finalinterview from './Component/Finalinterview';





//store.subscribe(()=> console.log(store.getState()));
 const root=ReactDOM.createRoot(document.getElementById("root"));
// const store=configureStore({
//       reducer:{
//         counter:CountercompShow,
//       },
//     })
 root.render(
 
  // <div>
  // <Provider store={store}>
  //  <Counter/>
  // </Provider>
  // </div>
    
    <div>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='about/' element={<About/>}/>
    <Route path='contact/' element={<Contact/>}/>
    <Route path='menu/' element={<Menu/>}/>
    <Route path='foodcart/' element={<Foodcart/>}/>
    
    </Routes>
    
     </BrowserRouter>
     </Provider>
      </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Machine/>} />
    //     <Route path='/machineTest' element={<MachineTest/>}/>
    //           </Routes>
    // </BrowserRouter>
  //  <div>
  //  <BrowserRouter>
  //  <Routes>
  //  <Route path='/' element={<Interview/>}/>
  //  <Route path='finalinterview' element={<Finalinterview/>}/>


  //  </Routes>
  //  </BrowserRouter>
    
  //   </div> 

//    <div>
//     <Router>
//     <Nav/>s
//     <Routes>
//     <Route path='/login'element={<LoginPage/>}/>
//     <Route path='/'element={<PrivateRoutingpage name={Home}/>}/>
//     <Route path='/about'element={<About/>}/>
//     <Route path='/course'element={<Course/>}/>
//     <Route path='/help'element={<Help/>}>
//     <Route path='otherhelp'element={<Otherhelp/>}/>
//     <Route path='employeehelp'element={<EmployeeHelp/>}/>
//     </Route>
//     <Route path='/d_user/:place'element={<Dynamicuser/>}/>

//     <Route path='/error'element={<Error/>}/>
//      </Routes>
// //     </Router>
       
//    </div>
   
   // <div>
   
   // <BrowserRouter>
   //   <Routes>
   //   <Route path='/Place' element={<Place/>}/>
   //   <Route path='/' element={<Placement/>}/>
     
    
   //   </Routes>
    
   //    </BrowserRouter>

   
  //</div>
  // <div>
  // <Interview/>
  // </div>
  // <Provider store={store} >
  // <BrowserRouter>
  // <Routes>
  // <Route path='/' element={<Hardwork/>}/>
  //  <Route path='/hardwork' element={<Hardwork/>}/>
  // <Route path='/getperson' element={<Getperson/>}/>
  // <Route path='/counterron' element={<CounterRon/>}/>
  // </Routes>
  
  // </BrowserRouter>
  // </Provider>

  // <div>
  // <BrowserRouter>
  // <Routes>
  // <Route path='/' element={<Jason/>}/>
  // <Route path='/jason' element={<Jason/>}/>

  
  // <Route path='/getperson' element={<Getperson/>}/>

  // </Routes>
  
  // </BrowserRouter>
  
  // </div>
);






 