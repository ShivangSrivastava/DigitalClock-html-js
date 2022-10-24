let date = new Date()


setInterval(() => {
    document.getElementsByName("date")[0].innerHTML = `<h1>${date}</h1>`
    date = new Date()
}, 1000);