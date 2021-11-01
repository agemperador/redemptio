import React,{useState,useEffect} from 'react'
import './header.scss'
import { HeaderContainer,Logo,Nav } from './header.styles';

const Header = () => {
    
    const [headerState,setHeaderState] = useState(true)
    //const [scrollPosition, setSrollPosition] = useState(0);



    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 80) setHeaderState(false)
        else setHeaderState(true)
        //setSrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <HeaderContainer headerState={headerState} className='header-container'>
            
            <Nav headerState={headerState}>
                <ul>
                    <li>Home</li>
                    <li>Metahipnosis</li>
                    <div className='logo'><Logo headerState={headerState} src="images/logo.jpeg" alt="" /></div>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </Nav>
        </HeaderContainer>
    )
}

export default Header
