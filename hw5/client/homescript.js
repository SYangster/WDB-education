console.log("script connected.")

var heart_status = 0 // 0 is empty and 1 is filled.
let nasa_api_url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "I2qTkaoMldkIg400xYFAeKY6JPIlBFJTgMSYmXyL";
let date_url = "&date=2021-10-";
let date = 26;
let curr_id = "";

document.getElementById("heart-button").addEventListener("click", () => {
    let heart = document.getElementById("heart-button");
    if (heart_status == 0) {
        heart.src = "static/heart-filled.png"
        heart_status = 1
        // TODO: update the database and mark this image as a favorite image.
        curr_date = document.getElementById("apod-date").innerText;
        curr_url = document.getElementById("apod-image").src;
        fetch("http://localhost:8080/api/db", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: curr_date,
                img_url: curr_url
            })
        })
        .then(response => response.json())
        .then(data => {
            curr_id = data.id
        })

    } else {
        heart_status = 0
        heart.src = "static/heart.png"
        // TODO: update the database and un-mark this image as a favorite image.
        fetch("http://localhost:8080/api/db/" + curr_id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
})

document.getElementById("next-button").addEventListener("click", () => {
    document.getElementById("heart-button").src = "static/heart.png";
    heart_status = 0
    // TODO: Get the image url, title, description, and date from the database using Fetch.
    // you can use let date = document.getElementById("apod-date"); to change the date.
    date -= 1;
    fetch(nasa_api_url + api_key + date_url + date)
    .then(response => response.json())
    .then(data => {
        document.getElementById("apod-date").innerText = data.date;
        document.getElementById("apod-title").innerText = data.title;
        document.getElementById("apod-p").innerText = data.explanation;
        document.getElementById("apod-image").src = data.url;
        curr_id = data.id;
    }); 
})
