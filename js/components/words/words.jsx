import React from "react";
    // import buttons from "../content/buttons";


class Words extends React.Component{
    render(){
        return <section className="words">
            <div className="container">
                <div className="col-12">
                    <div className="main-words-container">
                        <div className="col-8 main-words-box">
                            {this.props.karaokeText}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export {Words};
