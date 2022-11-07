import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/Contact.css"
import ContactForm from '../components/ContactForm';

function Booknow() {
    return (
        <div className="App">
            <Header />

         
            <ContactForm/>
        
            <Footer/>
        </div>
    );
}
export default Booknow;
