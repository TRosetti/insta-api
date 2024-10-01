const campos = "media_type,media_url"
const limite = 20;
const token = "IGQWRQRWFtaHNjcFJVY2s1UzNRVHJ2OHhXdlZAhenpuTDVjZA1lhRjFzZAFZA5ZADZAoOW5mWjhZAMzJ0RW9YQUFhUDBVYmUyRVdRVWFYa01NVzVObmdha3NUWmM1TGdnZA1d4b053VHdlNGdZAd1ZAMNnVnVXVNeUQwdi1wVmcZD";
const baseURL = `https://graph.instagram.com/me/media?fields=${campos}&access_token=${token}&limit=${limite}`;

fetch(baseURL)
.then(response => response.json())
.then((data) => {
    const media = document.querySelector(".media")

    data.data.forEach((img)  => {
        const mediaType = img.media_type;
        const mediaUrl = img.media_url;


        if(mediaType === 'VIDEO'){
            const video = document.createElement("video");
            video.src = mediaUrl;
            video.classList.add('container-video');
            media.appendChild(video);
        }else{
            const img = document.createElement('img');
            img.src = mediaUrl;
            img.classList.add('container-img');
            media.appendChild(img);
        }
    })
}).catch( (error) => console.log(error))
