document.getElementById("Dark").addEventListener("click", function () {
    
    document.getElementById("Dark").style.display = "none";

    const audio = document.getElementById("Music");
    audio.play();
    audio.volume = 0.15;
})