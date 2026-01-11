import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/maple-leaf-logo-transparent.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <NavLink to="/" className="brand-logo">
                    <img src={logo} alt="Maple Leaf Outsource" className="logo-image" />
                    <span className="logo-text">Maple<span className="gradient-text">Leaf</span></span>
                </NavLink>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Links */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                        About
                    </NavLink>
                    <NavLink to="/careers" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                        Careers
                    </NavLink>
                    <NavLink to="/contact" className="btn-primary nav-cta" onClick={() => setIsOpen(false)}>
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
