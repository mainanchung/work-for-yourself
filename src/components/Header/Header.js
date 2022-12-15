import './Header.scss'
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import cartIcon from '../../Assetes/icon/label.svg';
import homeIcon from '../../Assetes/icon/home.svg';
import personIcon from '../../Assetes/icon/person2.svg';
import testIcon from '../../Assetes/icon/test2.svg';


const getJobCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| "[]")

function Header({jobCart}){
 
    return( 
        <>      
            <div className='header'>
                <div>
                    <div className='header__links'>
                    <NavLink to={"/"} className='header__link'>
                        <div className='header__links--home'>
                            <img className='header__links--icon' src={homeIcon} alt='cartIcon'/>
                            Home
                        </div>
                    </NavLink>

                    <NavLink to={"/test"} className='header__link'>
                        <div className='header__links--test'>
                            <img className='header__links--icon' src={testIcon} alt='testIcon'/>
                            Test
                        </div>
                    </NavLink>

                    <NavLink to={"/types"} className='header__link'>
                        <div className='header__links--type'>
                            <img className='header__links--icon' src={personIcon} alt='personIcon'/>
                            All Types
                        </div>
                    </NavLink> 

                    <NavLink to={"/cart"} className='header__link' >
                        <div className='header__links--cart'>
                            <img className='header__links--icon' src={cartIcon} alt='cartIcon'/>
                            My Jobs {jobCart.length? `(${jobCart.length})`:""}  
                        </div>
                    </NavLink>   

                    </div>
                </div>
            </div>
        </> 
    )
}

export default Header;