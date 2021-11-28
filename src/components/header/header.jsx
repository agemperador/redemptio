import React,{useState,useEffect} from 'react'
import './header.scss'
import { HeaderContainer,Logo,Nav, MenuItem,MenuList,LogoContainer } from './header.styles';

const Header = () => {
    
    const [headerState,setHeaderState] = useState(true)
    //const [scrollPosition, setSrollPosition] = useState(0);
    const [menuMobile,setMenuMobile] = useState(false)



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

    console.log(menuMobile)

    return (
        <HeaderContainer headerState={headerState} menuMobileState = {menuMobile} className='header-container'>
            
            <Nav menuMobileState = {menuMobile} headerState={headerState}>
                <MenuList menuMobileState = {menuMobile}>
                    <MenuItem menuMobileState = {menuMobile}>Home</MenuItem>
                    <MenuItem menuMobileState = {menuMobile}>Metahipnosis</MenuItem>
                    <LogoContainer headerState={headerState} menuMobileState = {menuMobile}><Logo headerState={headerState} onClick={()=>setMenuMobile(!menuMobile)} src="images/logo.jpeg" alt="" /></LogoContainer>
                    <MenuItem menuMobileState = {menuMobile}>Nosotros</MenuItem>
                    <MenuItem menuMobileState = {menuMobile}>Contacto</MenuItem>
                </MenuList>
            </Nav>
        </HeaderContainer>
    )
}

export default Header
