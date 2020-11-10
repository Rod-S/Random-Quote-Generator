(() => {
    // event listener to respond to "Show another quote" button clicks
    // when user clicks anywhere on the button, the "combineFunction" function is called
    document.getElementById('loadQuote').addEventListener("click", combineFunction, false);

    //array of quote objects
    var quotes = [
        {
            quote: "Do or do not. There is no try.",
            source: "Yoda",
            citation: "Star Wars Episode V: The Empire Strikes Back",
            year: 1980,
            category: "Movies"
        },
        {
            quote: "The needs of the many outweigh the needs of the few, or the one.",
            source: "Spock",
            citation: "Star Trek II: The Wrath of Khan",
            year: 1982,
            category: "Movies"
        },
        {
            quote: "Leave nothing for tomorrow which can be done today.",
            source: "Abraham Lincoln",
            citation: "Memorandum for Law Lecture",
            year: 1850,
            category: "Politics"
        },
        {
            quote: "Float like a butterfly, sting like a bee.",
            source: "Muhammad Ali",
            citation: "The Rumble in the Jungle",
            year: 1974,
            category: "Sports"
        },
        {
            quote: "One is never afraid of the unknown; one is afraid of the known coming to an end.",
            source: "Jiddu Krishnamurti",
            category: "philosophy"
        },
    ];

    //return a random object from quotes array
    function getRandomQuote() {
        var object = Math.floor(Math.random() * quotes.length);
        return quotes[object];
    }

    //call getRandomQuote function, concatenate HTML string and print quote to the page
    function printQuote() {
        var quoteHTML;
        var outputDiv;
        var randomObject = getRandomQuote();
        //conditional added for quote object lacking year or citation properties
        if (!randomObject.year || !randomObject.citation) {
            quoteHTML = '<p class="quote">' + randomObject.quote + '</p>';
            quoteHTML += '<p class="source">' + randomObject.source + '';
            quoteHTML += '<span class="category">' + randomObject.category + '</span> </p>';
            outputDiv = document.getElementById('quote-box');
            outputDiv.innerHTML = quoteHTML;
        } else {
            quoteHTML = '<p class="quote">' + randomObject.quote + '</p>';
            quoteHTML += '<p class="source">' + randomObject.source + '';
            quoteHTML += '<span class="citation">' + randomObject.citation + '</span>';
            quoteHTML += '<span class="year">' + randomObject.year;
            quoteHTML += '<span class="category">' + randomObject.category + '</span> </p>';
            outputDiv = document.getElementById('quote-box');
            outputDiv.innerHTML = quoteHTML;
        }
    }

    //randomize RGB values to override styles.css body background-color key-value pair
    function getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    // 5 second timer to randomly generate quote and background color
    var quoteInterval = window.setInterval(combineFunction, 5000);

    //combined function for use with eventListener()
    function combineFunction() {
        getRandomColor();
        printQuote();
        clearInterval(quoteInterval);
        quoteInterval = window.setInterval(combineFunction, 5000);
    }
})();