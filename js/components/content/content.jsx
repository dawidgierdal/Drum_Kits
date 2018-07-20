import React from "react";
import Sound from 'react-sound';
import buttons from "./buttons.js";
import {Button} from "./button.jsx";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAudio: null,
            activeElements: [],
            text: '',
            timer: ''

        }

        // window.addEventListener('keydown', e => this.handleKeyDown(e) );
    }

    handleKeyDown = (e) => {

        const active = buttons.filter( elem => {
            return elem.dataKey == e.keyCode
        });
        this.setState({
            activeAudio: e.keyCode,
            activeElements: active[0].animationElement,
            timer: active[0].time
        });
        this.props.fillText(active[0].text);

    };

    render() {
        const rows = [];
        for (let i = 0; i < buttons.length; i++) {
            let playing = "key box ";
            let iamActive = false;

            if(this.state.activeAudio == buttons[i].dataKey || this.state.activeElements.indexOf(buttons[i].id) > -1) {
                playing += "playing";
            } else {
                playing += "";
            }
            const elem =  <Button dataKey={buttons[i].dataKey}
                                  playing= {playing}
                                  name={buttons[i].name}
                                  time={buttons[i].time}
                                  iamActive={this.state.activeAudio == buttons[i].dataKey}
            />;
            rows.push(elem);

            const autoLoad = this.state.activeAudio == buttons[i].dataKey ? true : false
            const isPlay = this.state.activeAudio == buttons[i].dataKey ? "PLAYING" : "STOPPED";

            const sound = (<Sound
                url={buttons[i].src}
                playStatus={isPlay}
                autoLoad={autoLoad}
            />);
            rows.push(sound)
        }

        return <section className="content">
            <div className="container">
                <div className="col-12 main-content">
                    <div className="board" onKeyDown={this.handleKeyDown} tabIndex="0">
                        {rows}
                    </div>
                </div>
            </div>
        </section>
    }
}

export {Content};