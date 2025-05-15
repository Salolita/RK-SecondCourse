import React from 'react';
import './NavBar.css';

const Navbar = () => (
    <ul className='navBar'>
        <li>
            <button>
                About me
            </button>
        </li>
        <li>
            <button>
                About my job
            </button>
        </li>
        <li>
            <button>
                Contact me
            </button>
        </li>
    </ul>
)

export default Navbar