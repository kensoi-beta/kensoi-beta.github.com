import { useEffect, useState } from 'react';
import './header-stylesheet.css';
import RoundICO from './../../img/roundico.svg';


import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

import {nanoid} from "nanoid";

function Logo({type, visible}) {
    return <a href="https://www.dshdev.ru">
        <div className={["header-logo", type, visible].join(" ")}>
            <img src={RoundICO} alt="RoundICO"/>
            {/* <div className="title">kensoi</div>
            <div className="page-status">dev</div> */}
        </div>
    </a>
}
var MenuList = [
    {
        name: "главная",
        href: "https://www.dshdev.ru/",
        target: "_self"
    },
    {
        name: "репозитории",
        href: "https://www.dshdev.ru/repos/",
        target: "_self"
    },
    {
        name: "контакты",
        href: "https://www.dshdev.ru/contacts/",
        target: "_self"
    },
]

const ScrollToFooter = () => {
    let block = document.getElementById("footer");
    let blockRect = block.getBoundingClientRect();
    window.scrollTo(window.pageXOffset, blockRect.bottom + window.innerHeight);
}
const ToFooterArrow = () => {
    return <div className="header-button-icon" onClick={ScrollToFooter}>
        <ArrowDownwardIcon />
    </div>
}

function MobileHeader ({headerMenu, toolkit, visible}) {
    const toggleMenu = () => {
        switch (headerMenu.headerMenuState) {
            case "vis": 
                headerMenu.setHeaderMenuState("invis"); 
                break;
            case "invis": 
                headerMenu.setHeaderMenuState("vis"); 
                break;
            default: break;
        }
    }
    return <div className="header mobile" id="header">
        <div className="header-container">
            <div className="header-button-icon" onClick={toggleMenu}>
                {headerMenu.headerMenuState === "vis" ? <ClearIcon /> : <MenuIcon />}
            </div>
            <Logo type="mobile"/>
            {toolkit.fcState && headerMenu.headerMenuState === "invis"? <ToFooterArrow /> : (<div className="header-space-icon"></div>)}
        </div>
        <div className={["header-visible", headerMenu.headerMenuState].join(" ")}>
            <div className="header-headline">
                REPO FINDER APP
            </div>
            {
                MenuList.map(item => <a href={item.href} key={nanoid()}>
                    <div className="header-visible-button">
                        {item.name}
                    </div>
                </a> 
                )
            }
        </div>
    </div>
}
function WebHeader ({toolkit, visible}) {
    return <div className="header screen">
        <div className="header-container">
            <Logo type="screen" visible={visible}/>
            <div className="header-menu">
            {
                MenuList.map(item => <a href={item.href} target={item.target} key={nanoid()}>
                    <div className="header-menu-button">
                        {item.name}
                    </div>
                </a>)
            }
            </div>
            {toolkit.fcState ? <ToFooterArrow /> : (<div className="header-space-icon"></div>)}
        </div>
    </div>
}
function Header({toolkit}) {
    let MobileDetect = require('mobile-detect');
    const [MobileUA, setMobileUA] = useState(new MobileDetect(window.navigator.userAgent).mobile());
    const [headerMenuState, setHeaderMenuState] = useState("invis");
    // eslint-disable-next-line
    const [visible, setVisible] = useState("visible");
    
    
    const headerMenu = {
        headerMenuState: headerMenuState, 
        setHeaderMenuState: setHeaderMenuState
    }
    // eslint-disable-next-line
    useEffect(() => {setMobileUA(new MobileDetect(window.navigator.userAgent).mobile())}, [MobileDetect, window.navigator.userAgent])
    if (toolkit.headerState) {
        return (
            <div>
                {MobileUA ? <MobileHeader headerMenu={headerMenu} toolkit={toolkit} visible={visible}/> : <WebHeader toolkit={toolkit} visible = {visible}/>}
                <div className="header-space"></div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default Header;
