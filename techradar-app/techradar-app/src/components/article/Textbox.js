import React from 'react'

function Textbox() {
    return (
        <div style={articleStyle}>
            <article>
                <h2>
                    Sample title
                </h2>
                <p>
                    React ist eine open-source JavaScript-Bibliothek zur Entwicklung von grafischen Oberflächen und Komponenten für grafischen Oberflächen. 
                    Darüber hinaus können auch Single Page Apps damit entwickelt werden.React wird oft als ein Framework betrachtet, wegen ihr Verhalten. 
                    Zurzeit ist sie die bekannteste Framework in der Webentwicklung.
                </p>
            </article>
        </div>
    )
}

const articleStyle = {
    textAlign: "justify",
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "11pt",
    fontWeight: "400"
}


export default Textbox