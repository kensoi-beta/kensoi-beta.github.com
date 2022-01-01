import './footer-stylesheet.css';
import RoundICO from './../../img/roundico.svg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { nanoid } from 'nanoid'
import { Tumblet } from '../tumblet/tumblet.js'

const ScrollToTop = () => {
    window.scrollTo(window.pageXOffset, 0);
}

const contexts = [
    {
        name: <LightModeIcon/>,
        context: "l",
        type: "svg"
    },
    {
        name: <NightlightIcon/>,
        context: "d",
        type: "svg"
    },
    {
        name: "AUTO",
        context: "a"
    }
]


function Logo({type}) {
    return <div className={["footer-button-icon", type].join(" ")}>
        <img src={RoundICO} alt="RoundICO"/>
        {/* <div className="title">kensoi</div>
        <div className="page-status">dev</div> */}
    </div>
}
function FooterRow(item) {
    if (item.isHeader) {
        return (
            <div className="footer-header" key = {nanoid()}>
                {item.title}
            </div>
        )
    }
    else {
        return (
            <a href={item.path.pathname} key = {nanoid()} target={item.target}>
                <div className="footer-link" key = {nanoid()}>
                    {item.title}
                </div>
            </a>
        )
    }
}

function FooterColumn(row) {
    return (
        <div className="footer-column" key = {nanoid()}>
            {row.map(item => FooterRow(item))}
        </div>
    )
}

function FooterContainer({toolkit}) {
    return <div className="footer-container" id="footer-container">
        {toolkit.fcState ? <Logo type="screen"/> : ""}
        <div className="footer-container-middle">
            <div className="footer-container-tumblet">
                <Tumblet tumbleConfig={contexts} context={toolkit.dm} setContext={toolkit.setDm}/>
            </div>
        </div>
        {toolkit.fcState ? <div className="footer-button-icon" onClick={ScrollToTop}>
            <ArrowUpwardIcon />
        </div> : ""}
        
    </div>
}

function Footer({toolkit}) {
    const footerTree = [
        [
            {
                isHeader: true,
                title: 'Проекты',
            },
            {
                isHeader: false,
                title: 'VKBotKit',
                path: {pathname: "https://www.dshdev.ru/vkbotkit/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'Libragram',
                path: {pathname: "https://www.dshdev.ru/libragram/"},
                target: "_blank"
            },
        ],
        [
            {
                isHeader: true,
                title: 'Каналы',
            },
            {
                isHeader: false,
                title: 'Kensoi Dev',
                path: {pathname: "https://t.me/kensoi"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'Libragram Dev',
                path: {pathname: "https://t.me/libragramdev"},
                target: "_blank"
            },
        ],
        [
            {
                isHeader: true,
                title: 'Страницы',
            },
            {
                isHeader: false,
                title: 'Контакты',
                path: {pathname: "https://www.dshdev.ru/contact/"},
                target: "_self"
            },
            {
                isHeader: false,
                title: 'Репозитории',
                path: {pathname: "https://www.dshdev.ru/repos"},
                target: "_self"
            },
        ],
    ]
    
    return (
        <div className="footer" id="footer">
            <FooterContainer toolkit = {toolkit}/>

            <div className="footer-wrapper">
                {
                    footerTree.map(column => FooterColumn(column))
                }
            </div>
        </div>
    );
}

export default Footer;
