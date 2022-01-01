import Logo from '../img/roundico.svg'


export const NotFound = ({toolkit}) => {
    return <div className="app-layout">
        <img src={Logo} className="app-icon" style={{background: "var(--dark)", borderRadius: '100%'}} alt="RoundICO"/>
        <div className="app-name">
            Ой, вупс!
        </div>
        <div className="app-paragraph">
            Вы забрели куда-то не туда. Попробуйте поискать нужную информацию <br /> <a href="https://www.dshdev.ru/pages/">на этой странице</a>?
        </div>
    </div>
  }


export default NotFound;