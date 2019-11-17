import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => (
         <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
           <div className="navbar-brand">Cookbook JS App</div>
           <button
             className="navbar-toggler"
             type="button"
             data-toggle="collapse"
             data-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon"></span>
           </button>

           <div
             className="collapse navbar-collapse"
             id="navbarSupportedContent"
           >
             <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                 <NavLink className="nav-link" to="/" exact>
                   Home
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/recipes">
                   Recipe List
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/add-recipe">
                   Create Recipe
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/about">
                   About
                 </NavLink>
               </li>
             </ul>
           </div>
         </nav>
       );
