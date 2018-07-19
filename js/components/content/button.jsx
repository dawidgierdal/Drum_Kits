import React from "react";
import buttons from "./buttons";
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter: this.props.time,
            tab: []
        }
    }


    componentWillReceiveProps(newProps) {

        if(newProps.iamActive) { //true

            this.idInterval = setInterval( () => {
                if(this.state.counter == 1 ||  this.state.counter == 0) {
                    clearInterval(this.idInterval)
                    this.setState({
                        counter: this.props.time
                    })
                } else {
                    console.log( newProps.iamActive)
                    this.setState({
                        counter:  this.state.counter - 1
                    })
                }

            }, 1000)

            // this.setState({
            //     tab: [  this.idInterval]
            // })

        } else {
            this.setState({
                counter: this.props.time
            })
        }
    }

    render(){
        // console.log("w btn", this.props.iamActive, this.props.dataKey)
        if(!this.props.iamActive) {
            clearInterval(this.idInterval)
        }
        return <div data-key={this.props.dataKey}
                    className={this.props.playing}>
            <span>{this.props.name} {this.state.counter}</span>
        </div>
    }
}
export {Button}