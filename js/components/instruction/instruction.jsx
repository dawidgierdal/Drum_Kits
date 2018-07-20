import React from "react";


class Instruction extends React.Component{
    render(){
        return <section className="instruction">
            <div className="col-12 main-instruction-banner"></div>
            <div className="container main-instruction-filter">
                <div className=" col-12 main-instruction">
                    <div className="col-8 main-instruction-box">
                        <h1>Instruction</h1>
                        <ul>
                            <li>1. To start click the board and press the "A" button</li>
                            <li>2. After pressing, you turn on the first sound</li>
                            <li>3. The duration of the sound will appear on the button</li>
                            <li>4. The song lyrics appear above the board</li>
                            <li>5. Try to play the song as best as you can! :)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    }
}

export {Instruction};