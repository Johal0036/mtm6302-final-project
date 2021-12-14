fetch('https://api.nasa.gov/planetary/apod?api_key=5GG6dxfCUHvQ2nMGTX60QjmwkIszoeIKznsQH0Ch')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
        // nasa image background
        const photo = document.getElementById("photo")
        photo.style.backgroundImage = `url(${json.url})`

        // nasa caption
        const caption = document.getElementById("caption")
        caption.innerHTML = `<p>Title:</p> ${json.title}`
    })