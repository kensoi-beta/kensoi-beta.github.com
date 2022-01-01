import Tomato from '../img/tomato.png'
import "../components/adaptive/adaptive.css";
export const ExamplePage = ({toolkit}) => {
  return <div className="app-layout">
      <div className="app-name">
        Ваше первое приложение
      </div>
      <div className="adaptive-block two-block">
        <div className="adaptive-block-item centering">
            <img src={Tomato} width = "192px" alt="tomato"/>
        </div>
        <div className="adaptive-block-item x-centering">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    <div className="app-paragraph">
        <center>
          <b>
            Попробуйте также изменить страницу в app.js
          </b>
        </center>
    </div>
  </div>
}