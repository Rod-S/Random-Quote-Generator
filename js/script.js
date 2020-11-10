(() => {
    // event listener to respond to "Show another quote" button clicks
    // when user clicks anywhere on the button, the "combineFunction" function is called
    // document.getElementById('loadQuote').addEventListener("click", combineFunction, false);

    //array of quote objects
    var quotes;

    $.ajax("http://aphorisms.glitch.me/api/all").done(function(data, status, jqXhr) {
        var quotes = data;
        quotes.push(data);
        console.log(quotes);
        document.getElementById('loadQuote').addEventListener("click", combineFunction, false);
        //return a random object from quotes array
        function getRandomQuote() {
            var object = Math.floor(Math.random() * quotes.length);
            console.log(quotes[object]);
            return quotes[object];
        }

        //call getRandomQuote function, concatenate HTML string and print quote to the page
        function printQuote() {
            var quoteHTML;
            var outputDiv;
            var randomObject = getRandomQuote();
            //conditional added for quote object lacking year or citation properties
            quoteHTML = `<p class="quote">${randomObject.quote}</p>
                         <p class="source">${randomObject.author}</p>`
            outputDiv = document.getElementById('quote-box');
            outputDiv.innerHTML = quoteHTML;
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
    })


})();