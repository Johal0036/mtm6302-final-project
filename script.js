fetch('https://api.nasa.gov/planetary/apod?api_key=5GG6dxfCUHvQ2nMGTX60QjmwkIszoeIKznsQH0Ch')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
        // NASA photo
        const photo = document.getElementById("photo")
        photo.style.backgroundImage = `url(${json.url})`

        // NASA caption
        const caption = document.getElementById("caption")
        caption.innerHTML = `<p>Title:</p> ${json.title}. <br/> <p>Description:</p> ${json.explanation}.`
    })

//Luxon library
const DateTime = luxon.DateTime
const now = DateTime.local()
const currentDate = DateTime.fromISO()

const date = document.getElementById("date")
date.innerHTML = now.toFormat("DDDD")
const time = document.getElementById("time")
time.innerHTML = now.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)

const greetings = document.getElementById("greetings");
const message = ["Hello. Good morning!", "Hi. Good afternoon!", "Good evening!"]

function greeting() {
    if (now.hour < 12) {
        greetings.innerHTML = message[0];
    } else if (now.hour >= 12 && now.hour <= 16) {
        greetings.innerHTML = message[1];
    } else if (now.hour >= 17) {
        greetings.innerHTML = message[2];
    }
}
greeting();

/* let hours = now.hour
let min = now.minute
let sec = now.seconds

function counting() {
    sec += 1;
    if (sec > 59) {
        sec = 0
        min += 1
        if (min > 59) {
            min = 0
            hours += 1
            if (hours > 23) {
                hours = 0
                min = 0
                sec = 0
            }
        }
    }
    let dec = ''
    if (hours < 10) {
        dec = '0' + hours
    } else {
        dec = hours
    }

    if (min < 10) {
        dec += ':0' + min
    } else {
        dec += ':' + min
    }
    if (sec > 10) {
        dec += ':0' + sec
    } else {
        dec += ':' + sec
    }

    if (format === "complete") {
        time.innerHTML = now.ToFormat('DDDD') + ' ' + '-' + ' ' + dec
    } else {
         time.innerHTML = dec;
    }

   
    setInterval(counting, 1000);
} */


// Buttons for additional features
const week = document.getElementById("button1")
const month = document.getElementById("button2")
const year = document.getElementById("button3")
const result = document.getElementById("result")

week.addEventListener("click", function (e) {
    e.preventDefault();
    result.style.display = "inline"
    result.innerHTML = DateTime.local().weekdayLong
})

month.addEventListener("click", function (e) {
    e.preventDefault()
    result.style.display = "inline"
    result.innerHTML = DateTime.local().day
})

year.addEventListener("click", function (e) {
    e.preventDefault()
    result.style.display = "inline"
    result.innerHTML = DateTime.local().ordinal
})