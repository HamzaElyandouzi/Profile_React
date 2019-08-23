import React from "react";
import './Description.css'

class Description extends React.Component{
    render(){
        return (
            <div className="paragraph">
                <h1>Profile</h1>
                <hr/>
                <p>
                    Als een Developer hoop ik elke dag mij kunnen te verbeteren en mijn kennis
                    te vergroten. Grote of kliene uitdagingen, medium of small ik grijp ze elke dag
                    met open armen.

                    Ik woon en werk uit Antwerpen en je kan me altijd bereiken via de onderstaande
                    contact formulier voor al je BackEnd needs.

                    Als je stevige BackEnd wilt, geschreven in een even stevige taal ben ik je man.
                </p>
            </div>
        )
    }
}

export default Description;