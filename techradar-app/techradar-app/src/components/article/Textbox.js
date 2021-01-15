import React from 'react'

function Textbox() {
    return (
        <div id="container" style={containerStyle}>
            <div id="title">
                <h2 style={h2Style}>
                    Sample title
                </h2>
            </div>
            <div id="text_content">
                <p>
                    React ist eine open-source JavaScript-Bibliothek zur Entwicklung von grafischen Oberflächen und Komponenten für grafischen Oberflächen. 
                    Darüber hinaus können auch Single Page Apps damit entwickelt werden.React wird oft als ein Framework betrachtet, wegen ihr Verhalten. 
                    Zurzeit ist sie die bekannteste Framework in der Webentwicklung.
                    
                </p>
                {/* <script>
                    function(){
                        ("#includedContent").load("article.html")
                    }
                </script> */}
            </div>
            <div id="author">
                <h3> Author </h3>
            </div>
            <div id="date_added">
                <h3> Added on:  </h3>
            </div>
            <div id="date_last_edit">
                <h3> Last edited:  </h3>
            </div>
        </div>
    )
}

const containerStyle = {
    textAlign: "justify",
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "11pt",
    fontWeight: "400",
    verticalAlign: "top"
}

const h2Style = {
    verticalAlign: "top",
    marginTop: "-20em"
}

export default Textbox