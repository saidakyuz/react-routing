import { NavLink } from 'react-router-dom';
import '../assets/styles.css';

const Navbar = () => {
    
    return (
        <div>
            <ul style={{ display: 'flex', justifyContent: 'space-around' }}> {/* Double curlybrace. Because first one to define it's a javascript code. Second one is to say that it's an object. In javascript style scripts hav be written as an object to write inline css. */}
                <NavLink exact to='/' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/about' activeClassName='active'>
                    About
                </NavLink>
                <NavLink to='/contact' activeClassName='active'>
                    Contact
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;