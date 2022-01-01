import {Tumblet} from '../components/tumblet/tumblet.js';
import {useState} from 'react'

export const TumbletTest = ({toolkit}) => {
    const contexts = [
        {
            name: "test-1",
            context: "Левая сторона ''test-1''"
        },
        {
            name: "test-2",
            context: "Правая сторона ''test-2''"
        }
    ]
    const [context, setContext] = useState(contexts[0].context); // state test
    
    return <div className="app-layout">
        <div className="app-name">
            Пример приложения с тумблетом
        </div>
        <div className="app-paragraph">
            <b>Тумблер</b> - Небольшой механический переключатель электрического тока на два-три положения.
        </div>
        <div className="app-paragraph">
            Тумблет это шаблон тумблера, который позволяет переключать переменную из состояния "a" в состояние "b". К примеру, нажми на этот тумблет:
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Tumblet tumbleConfig={contexts} context={context} setContext={setContext}/>
        </div>
        <div className="app-paragraph">
            Состояние тумблета: {context}
        </div>
    </div>
    }