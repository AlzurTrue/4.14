import React from "react";
import image from "./Avatar.png"
import './App1.css';

class App1 extends React.Component {

    render() {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <div className="UserInfo-name">
                        <img alt={"Аватарка студента"} src={image}/>
                        <h2 className='name'>Александр</h2>
                    </div>
                </div>
                <div className="Comment-text">
                    <p><strong>Студент группы:</strong> ПИ19-4</p>
                </div>
                <div className="Comment-date">
                    <p><strong>Дата создания:</strong> 04.06.2022</p>

                </div>
            </div>
        )
    }

}

export default App1