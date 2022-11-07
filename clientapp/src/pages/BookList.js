import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/Contact.css"
import BookingList from '../components/BookingList';

function BookList() {
    return (
        <div className="App">
            <Header />

         
            <BookingList />
        
            <Footer/>
        </div>
    );
}
export default BookList;
