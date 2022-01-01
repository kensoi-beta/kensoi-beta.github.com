import "./tumblet-stylesheet.css";
import {nanoid} from "nanoid";

function TumbletButton({item, context, setContext}) {
  let buttonType = item.type ? "svg" : ""
  return <div key = {nanoid()} className={context === item.context ? "tumblet-item " + buttonType : "tumblet-item tumblet-selected " + buttonType } onClick={() => {setContext(item.context)}}>
    {item.name}
  </div>
}
export function Tumblet({tumbleConfig, context, setContext}) {
    return <div className="tumblet"> 
      <div className="tumblet-wrapper">
        {
          tumbleConfig.map(item => TumbletButton({item, context, setContext}))
        }
      </div>
    </div>
  }