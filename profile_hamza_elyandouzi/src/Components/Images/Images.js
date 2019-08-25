import React from  'react'
import './Image.css'
import Java from '../../Resources/Java.png'
import Spring from '../../Resources/Spring.png'
import Hibernate from '../../Resources/hibernate.png'

//the images used on the page
class Images extends React.Component{
    render() {
        return(
            <div className="Image">
                {/*images are used by there reference name*/}
                <img src={Java} alt="JAVA" className="java"/>
                <img src={Spring} alt="Spring" className="spring"/>
                <img src={Hibernate} alt="hibernate" className="hibernate"/>
            </div>
        )
    }
}

export default Images;
