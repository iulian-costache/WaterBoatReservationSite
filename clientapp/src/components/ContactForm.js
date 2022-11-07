import React from 'react';
import "./ContactForm.css"


class ContactForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nume: "",
            datefrom: "",
            dateto: "",
            phone: "",
            serverMessage: ""

        };
    }

    handleButtonClick(event) {
        event.preventDefault();


        const data = new URLSearchParams();
        data.append("nume", this.state.nume);
        data.append("datefrom", this.state.datefrom);
        data.append("dateto", this.state.dateto);
        data.append("phone", this.state.phone);

        let that = this;
        let confirm = document.querySelector(".form-container")


        fetch("http://127.0.0.1:5000/booknow", {
            method: "POST",
            body: data
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success)
                that.setState({
                    serverMessage: data.confirmation
                });
            })
            confirm.innerText = this.state.serverMessage;
        }
        
        handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "nume") {
            this.setState({
                nume: value
            });
        } else if (name === "datefrom") {
            this.setState({
                datefrom: value
            })
        } else if (name === "dateto") {
            this.setState({
                dateto: value
            })
        } else if (name === "phone") {
            this.setState({
                phone: value
            })
        }
    }
    
    render() {
        return (
            <div className="form">
            
                <h2 className="reserve-booking-title">Reserve Booking Page <br/>{this.state.serverMessage} </h2>

                <form action="/" className="form-container">
                    <div className="form-input">
                        <div className="form-name-container">
                            <label className="form-name"> Full name: </label>
                            <input onChange={this.handleChange.bind(this)}
                                className="form-input"
                                type="text"
                                name="nume" />
                        </div>

                        <div className="form-date-container">
                            <label className="form-date"> Date from:</label>
                            <input onChange={this.handleChange.bind(this)}
                                className="form-input"
                                type="date"
                                name="datefrom" />
                        </div>
                        <div className="form-date-container">
                            <label className="form-date"> Date to:</label>
                            <input onChange={this.handleChange.bind(this)}
                                className="form-input"
                                type="date"
                                name="dateto" />

                        </div>
                        <div className="form-phone-container">
                            <label className="form-phone"> Phone number: </label>
                            <input onChange={this.handleChange.bind(this)}
                                className="form-input"
                                type="text"
                                name="phone" />
                        </div>
                        <button onClick={this.handleButtonClick.bind(this)}
                            className="form-submit">Send booking</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default ContactForm;
