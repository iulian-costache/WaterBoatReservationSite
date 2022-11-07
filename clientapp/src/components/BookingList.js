import React from 'react';
import "./BookingList.css"

class BookingList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: [],
            datefrom: [],
            dateto: [],
            phone: []
        };
    }

    componentDidMount() {

        let that = this;

        fetch("http://127.0.0.1:5000/bookinglist")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                that.setState({
                    name: data.name,
                    datefrom: data.datefrom,
                    dateto: data.dateto,
                    phone: data.phone
                });
            });
    }

    getNamesList() {
        return this.state.name.map(function (name) {
            return (
                <table>
                    <tr>
                        {name}
                    </tr>
                </table>);
        });
    }

    getDateFromList() {
        return this.state.datefrom.map(function (datefrom) {
            return (
                <table>
                    <tr>
                        {datefrom}
                    </tr>
                </table>);
        });
    }
    getDateToList() {
        return this.state.dateto.map(function (dateto) {
            return (
                <table>
                    <tr>
                        {dateto}
                    </tr>
                </table>);
        });
    }
    getPhoneList() {
        return this.state.phone.map(function (phone) {
            return (
                <table>
                    <tr>
                        {phone}
                    </tr>
                </table>);
        });
    }

    render() {
        return (
            <div className="bookinglist-container">
                <div className="list-container">
                    <h2 className="bookinglist-title"> Booking items list</h2>
                    <table className="table-container">
                        <tr>
                            <th className="bookinglist-tabelheader"> Full name </th>
                            <th className="bookinglist-tabelheader"> Date from </th>
                            <th className="bookinglist-tabelheader"> Date to </th>
                            <th className="bookinglist-tabelheader" > Phone </th>
                        </tr>
                        <tr>
                            <td className="bookinglist-tabeldata">  {this.getNamesList()}</td>
                            <td className="bookinglist-tabeldata">  {this.getDateFromList()}</td>
                            <td className="bookinglist-tabeldata">  {this.getDateToList()}</td>
                            <td className="bookinglist-tabeldata">  {this.getPhoneList()}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    };
};

export default BookingList;

