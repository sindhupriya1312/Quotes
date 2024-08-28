function DataApi() {

    let btn = document.getElementById('btn')
    let text = document.getElementById('text')
    let author = document.getElementById('author')
    btn.addEventListener('click', () => {
        let randomQuote = Math.floor(Math.random() * 100)

        fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                text.innerHTML = data.quotes[randomQuote].quote
                author.innerHTML = `${'__'}` + data.quotes[randomQuote].author
            });
    })

}
DataApi()

