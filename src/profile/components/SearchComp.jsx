import React from "react";
import '../style/search.css';
import CharComp from "./CharComp";
import properties from "../libs/properties";

class SearchComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            charValue: '',
            isProfileVisible: false,
            profileInfo: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setProfileVisible = this.setProfileVisible.bind(this, false);
    }

    handleChange(event) {
        this.setState({
            charValue: event.target.value
        });
    }

    handleSubmit(event) {
        fetch("https://rickandmortyapi.com/api/character/?name=" + this.state.charValue,
            {
                method: "GET"
            }
        )
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    profileInfo: res.results,
                    isProfileVisible: true
                })
            });
        event.preventDefault();
    }

    setProfileVisible(isProfileVisible) {
        this.setState({
            isProfileVisible: isProfileVisible
        })
    }


    render() {
        return (
            <div className="container">
                {
                    !this.state.isProfileVisible ?
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                {properties.labels.choose}
                                <input type="text"
                                       value={this.state.charValue}
                                       onChange={this.handleChange}
                                />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        :
                        <CharComp
                            characters={this.state.profileInfo}
                            callback={this.setProfileVisible}/>
                }
            </div>
        );
    }
}

export default SearchComp;
