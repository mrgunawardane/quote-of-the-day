const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author")
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twiteBtn = document.querySelector(".twite");

function randomQuote(){
    quoteBtn.innerText = "Loading ..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote"
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText + " by" + authorName.innerText);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
});

quoteBtn.addEventListener("click", randomQuote)