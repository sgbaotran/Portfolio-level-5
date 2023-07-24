
import '../styles/header.css';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-scroll'

import avatar from '../data/avatar.jpg';
export default function Header() {
    return (
        <header className="main-component header">
            <div>
                <h1 className=' header-basic-info header-name' > Gia Bao Tran</h1>
                <img src={avatar} alt='profile'></img>
                <h2 className=' header-basic-info header-title'>Data Analyst at Innvopost</h2>
                <p className=' header-introduction'>I build accessible, inclusive products and digital experiences for the web.</p>
            </div>


            <ul className='navigation-list'>
                <Link class='navigation-item' activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={200} >ABOUT </Link>
                <Link class='navigation-item' activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={200} >EXPERIENCE </Link>
                <Link class='navigation-item' activeClass="active" to="project" spy={true} smooth={true} offset={-50} duration={200} >PROJECT </Link>
            </ul>


            <ul className='contact-list'>
                <li className='contact-list-item'><a href='https://github.com/sgbaotran'><FaGithub /></a>  </li>
                <li className='contact-list-item'><a href='https://www.linkedin.com/in/gbaotran/'><FaLinkedin /></a>  </li>
                <li className='contact-list-item'><a href='https://telegram.me/stephengiatran'><FaTelegram /></a>  </li>
                <li className='contact-list-item'><a href='#'><FaWhatsappSquare /></a>  </li>
            </ul>
        </header>
    )
}
