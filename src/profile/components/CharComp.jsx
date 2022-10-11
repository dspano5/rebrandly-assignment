import React from "react";
import Button from 'react-bootstrap/Button';

class CharComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentChar: 0
        };
    }


    onCharChange(isCharNext) {
        this.setState({
            currentChar: isCharNext ? this.state.currentChar + 1 : this.state.currentChar - 1
        })
    }


    render() {
        return (
            <div>
                <Button variant="outline-info"
                        className="button"
                        onClick={this.onCharChange.bind(this, false)}
                        disabled={this.state.currentChar === 0}>{"<"}</Button>
                <img alt="" src={this.props.characters[this.state.currentChar].image}/>
                <Button variant="outline-info"
                        className="button"
                        onClick={this.onCharChange.bind(this, true)}
                        disabled={this.state.currentChar === this.props.characters.length - 1}>{">"}</Button>
                <div>
                    Name: {this.props.characters[this.state.currentChar].name}<br/>
                    Species: {this.props.characters[this.state.currentChar].species}<br/>
                    Status: {this.props.characters[this.state.currentChar].status}<br/>
                </div>
                <div>
                    Location: {this.props.characters[this.state.currentChar].location.name}<br/>
                    Origin: {this.props.characters[this.state.currentChar].origin.name}
                </div>
                <Button variant="outline-info"
                        className="button">{"Back"}</Button>
            </div>
        );
    }
}

export default CharComp;
