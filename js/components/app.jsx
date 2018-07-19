import React from "react";
import {Header} from "./header/header.jsx";
import {Words} from "./words/words.jsx";
import {Content} from "./content/content.jsx";
import {Instruction} from "./instruction/instruction.jsx";
import {Footer} from "./footer/footer.jsx";
import {Audio} from "./audio/audio.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Song: XXXTentacion - Sad!',
        }
    }

    fillText = (txt)=>{
        this.setState({
            text: txt,
        })
    };

    render() {
        return <div className="all_Sections">
            <Header/>
            <Words karaokeText={this.state.text}/>
            <Content fillText={this.fillText}/>
            <Instruction/>
            <Footer/>
            <Audio/>
        </div>
    }
}

export {App};