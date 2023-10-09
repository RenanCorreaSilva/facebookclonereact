import './App.css';
import {FaFacebook, FaSearch, FaAlignJustify} from 'react-icons/fa'


function Header(){
    return(
        <div className='header'>
            <div className='headerLeft'>
                <div className='logo-fb'>
                    <FaFacebook />
                </div>
                
                <div className='search-fb'>
                    <FaSearch /* Estilizar o Search - minuto 20:00 da live */ />
                    
                </div>
                <div className='menu-fb'>
                    <FaAlignJustify />
                </div>
            </div>

            <div className='headerRight'>
                <div className='plus-btn'>
                    +
                </div>
            </div>
        </div>
       
    )
}


export default Header