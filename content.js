setInterval(() => {

    const video = document.querySelector("video");

    if (video && video.volume > 0.05) {

        video.volume = 0.05;

    }

}, 200);