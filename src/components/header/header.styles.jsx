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
`
export const Logo =styled.img`
                    position: absolute;
                    width: auto;
                    height: ${({headerState})=>headerState? HEADER_HEIGHTS[0]: HEADER_HEIGHTS[1]};
                    margin-top: ${({headerState})=>headerState? '15px': '0px'};;
                    border-radius: 100%;
                    object-fit: scale-down;
                    transition: ease-out 0.1s;
                    `

export const Nav =styled.nav`
        background-color:${({headerState})=>headerState? 'none' : 'rgba(255,255,255,0.2)'}; ;
        width: 70%;
        height: 100%;
        padding: 5px 0 5px 0;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: bold;
        position: relative;
        color: white;
        `