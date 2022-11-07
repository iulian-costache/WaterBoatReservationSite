import React from 'react';
import Header from '../components/Header';
import Imageslider from '../components/Imageslider';
import Imageblock from '../components/Imageblock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope, faShip, faUser } from '@fortawesome/free-solid-svg-icons'
import Main from '../components/Main';
import Footer from '../components/Footer';

const element1 = <FontAwesomeIcon icon={faGlobeEurope} />
const element2 = <FontAwesomeIcon icon={faShip} />
const element3 = <FontAwesomeIcon icon={faUser} />

function Homepage() {
    return (
        <div className="">

            <Header />

            <Imageslider />
            <div className="container">
                <div className="size-33">
                    <Imageblock img={element2} 
                        title="Luxuries Yacht"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        />
                </div>
                <div className="size-33">
                    <Imageblock img={element1} 
                     title="30 Years of Experience"
                     description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                     />
                </div>
                <div className="size-33">
                    <Imageblock img={element3}
                     title="Good Captain"
                     description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                </div>
               
            </div>

            
            <Main/>
        
        <Footer/>
        </div>
    );
}

export default Homepage;
