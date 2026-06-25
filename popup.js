document.getElementById("btn").addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },

        func: () => {

            const video = document.querySelector("video");

            if (video) {

                video.volume = 0.1;

                alert("Volume YouTube impostato al 10%");

            } else {

                alert("Video non trovato");
            }
        }
    });
});