import './App.css';
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react"; 
import { Movielist, Movielists } from './Components/Movielist';
import { AddMovie } from './Components/AddMovie';

import * as React from 'react';

import { Addcolor } from './Addcolor';  
import { EditMovie } from './Components/EditMovie';
import { MovieDetail } from './Components/MovieDetails';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Activation from './Components/Activation'; 
import ResetPassword from './Components/ResetPassword';
import { Home } from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import Users from './Components/Users';

function App() {  
  const [movieList,setMovieList] = useState([]); 

  return ( 
    <div className="App">    
      <Routes>   
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signUpActivation/:id" element={<Activation/>} />
        <Route path="/forget" element={<ForgotPassword/>}/>
        <Route path="/reset-password/:id" element={<ResetPassword/>} />

        <Route path="/home" element={<Home/>}/> 
        <Route path="/*" element={<Navigate to="/"/>}/> 
        <Route path="/Movie" element={<Movielists />} />  
        <Route path="/Users" element={<Users />} />  
        <Route path="/AddMovie" element={<AddMovie movielists={movieList} setMovieList={setMovieList}/>} />  
        <Route path="/Movie/:abc" element={<MovieDetail movielists={movieList}/>} /> 
        <Route path="/Movie/edit/:abc" element={<EditMovie/>} />   
      </Routes> 
    </div> 
  );
} 
export default App;
