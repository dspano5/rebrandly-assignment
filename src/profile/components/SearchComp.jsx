import React from "react";
import '../style/search.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.status);
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                this.setState({
                    profileInfo: res.results,
                    isProfileVisible: true
                })
            }).catch((error) => {
            alert("Error: " + error);
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
            <>
                {
                    !this.state.isProfileVisible ?
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    {properties.labels.choose}
                                </Form.Label>
                                <Form.Control
                                    value={this.state.charValue}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button variant={"outline-info"}
                                    type="submit">
                                {properties.labels.search}
                            </Button>
                        </Form>
                        :
                        <CharComp
                            characters={this.state.profileInfo}
                            callback={this.setProfileVisible}/>
                }
            </>
        );
    }
}

export default SearchComp;
