window.onload = starting;

function starting() {
    $("#new-quote").click(function() {
        randQuote();
    });

    $("#tweet-quote").click(function() {

    });

    randQuote();
}

function randQuote() {
    var quotes = [{
            id: 1,
            text: "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
            source: "Robert Frost, American Poet"

        },
        {
            id: 2,
            text: "Listen with curiosity. Speak with honesty. Act with integrity. The greatest problem with communication is we don’t listen to understand. We listen to reply. When we listen with curiosity, we don’t listen with the intent to reply. We listen for what’s behind the words.",
            source: "Roy T. Bennett, The Light in the Heart"
        },
        {
            id: 3,
            text: "Speak the truth and live it",
            source: "Jordan Peterson"
        },

    ];

    var rQuote = quotes[Math.floor(Math.random() * (quotes.length))];
    $("#text").html(rQuote.text);
    $("#author").html(rQuote.source);
    $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + rQuote.text + '" - ' + rQuote.source));
}


function stringToClickToTweetURl(str) {
    var stringToConvert = str.split(" ").join("%20").split("@").joi("%40").split("!").join("%21");

    var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

    return resultString;
}
