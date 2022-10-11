import React from "react";
import Button from 'react-bootstrap/Button';
import properties from "../libs/properties";

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
                        disabled={this.state.currentChar === 0}>{properties.labels.leftArrow}</Button>
                <img alt="" src={this.props.characters[this.state.currentChar].image}/>
                <Button variant="outline-info"
                        className="button"
                        onClick={this.onCharChange.bind(this, true)}
                        disabled={this.state.currentChar === this.props.characters.length - 1}>{properties.labels.rightArrow}</Button>
                <div>
                    {properties.labels.name} {this.props.characters[this.state.currentChar].name}<br/>
                    {properties.labels.species} {this.props.characters[this.state.currentChar].species}<br/>
                    {properties.labels.status} {this.props.characters[this.state.currentChar].status}<br/>
                </div>
                <div>
                    {properties.labels.location} {this.props.characters[this.state.currentChar].location.name}<br/>
                    {properties.labels.origin} {this.props.characters[this.state.currentChar].origin.name}
                </div>
                <Button variant="outline-info"
                        className="button"
                        onClick={this.props.callback.bind(this, false)}>
                    {properties.labels.back}
                </Button>
            </div>
        );
    }
}

export default CharComp;
