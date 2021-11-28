import styled from 'styled-components'
import {HEADER_HEIGHTS} from '../../presets'

export const HeaderContainer =styled.div`

    width: 100%;
    position: fixed;
    display: flex;
    height: ${({headerState})=>headerState? '60px': '50px'};
    justify-content: center;
    margin: 0;
    z-index: 3;
    margin-top: 10px;
    transition: ease-in-out 0.1s;
    @media (max-width: 600px) {
            margin: 0;
            height: ${({headerState,menuMobileState})=>headerState? (menuMobileState? '100%':'70px'):
            (menuMobileState? '100%' : '60px')};
        }
`
export const Logo =styled.img`
                    position: absolute;
                    width: auto;
                    height: ${({headerState})=>headerState? HEADER_HEIGHTS[0]: HEADER_HEIGHTS[1]};
                    margin-top: ${({headerState})=>headerState? '15px': '0px'};;
                    border-radius: 100%;
                    object-fit: scale-down;
                    transition: ease-out 0.1s;
                    @media (max-width: 600px) {
                        height: ${({headerState})=>headerState? HEADER_HEIGHTS[2]: HEADER_HEIGHTS[3]};
                    }
                    `
export const LogoContainer = styled.div`

    margin-right: 10px;
    grid-column: 3;
    margin: auto;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    transition: all ease-in 0.1s;
    @media (max-width: 600px) {
        ${({headerState,menuMobileState})=>
        menuMobileState?
        "width: auto;height: auto;position: absolute; left:50%;" + 
        (headerState?
        'bottom:150px': 'bottom:70px' ):
        'bottom:0'
    };
    

    }
`

export const Nav =styled.nav`
        background-color:${({headerState})=>headerState? 'none' : 'rgba(120,120,120,0.6)'}; ;
        width: 70%;
        height: 100%;
        padding: 5px 0 5px 0;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: bold;
        position: relative;
        color: white;
        @media (max-width: 600px) {
            margin: 0;
            width: 100%;
            background-color: ${({headerState,menuMobileState})=>headerState? (!menuMobileState? 'none' : 'rgba(130,130,130,0.6)'):'rgba(180,180,180,0.6)'}; ;
        }
        `

export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
    width: 100%;
    height: 100%;
    list-style: none;
    border-left: solid 1px white;
    border-right: solid 1px white;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-bottom:${({menuMobileState})=>
        menuMobileState? "100px":'0'
    };
    }
`


export const MenuItem = styled.li` 
    margin-right: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    @media (max-width: 600px) {
        display: ${({menuMobileState})=> menuMobileState? 'block':'none'};
        font-size: 20px;
    }
    `