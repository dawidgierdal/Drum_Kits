import React from "react";
import {Canvas} from "./canvas.jsx"


class Header extends React.Component{
    render(){
        return <section className="header">
            <div className="container">
                <div className="col-12 main-header">
                    <div className='main-header-title'>Drum <span>Kits</span></div>
                    <Canvas></Canvas>
                </div>
            </div>
        </section>
    }
}

export {Header};