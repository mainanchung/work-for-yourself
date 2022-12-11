import './SideBar.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function SideBar(){
   
   
    return( 
        <>      
        <div className='side-bar'>
            <div className='side-bar__container'>
             <img className='side-bar__logo' src='' alt='' />
                <div className='side-bar__links'>
                    <NavLink className='side-bar__link'>Test</NavLink>
                    <NavLink className='side-bar__link'>Personalities</NavLink>
                    <NavLink className='side-bar__link'>Colletction</NavLink>
                    <NavLink className='side-bar__link'>About</NavLink>
                </div>
             </div>
        </div>
        </> 
    )
}

export default SideBar;
