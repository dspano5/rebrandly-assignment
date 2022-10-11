import React from "react";
import '../style/search.css';
import CharComp from "./CharComp";

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
                    isProfileVisible: true,
                    profileInfo: res.results,
                })
            });
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                {
                    !this.state.isProfileVisible ?
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Choose the profile character:
                                <input type="text"
                                       value={this.state.charValue}
                                       onChange={this.handleChange}
                                />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        :
                        <CharComp
                            characters={this.state.profileInfo}/>
                }
            </div>
        );
    }
}

export default SearchComp;
