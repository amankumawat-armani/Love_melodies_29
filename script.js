// Request permission for notifications
if ("Notification" in window) {
    Notification.requestPermission();
}

// Function to play a song
function playSong(index) {
    if (currentSong !== index || audio.src !== songs[index].src) {
        currentSong = index;
        audio.src = songs[index].src;
    }

    if (audio.paused) {
        audio.play();
        showNotification(`Now playing: ${songs[index].title}`);
    } else {
        audio.pause();
        showNotification("Playback paused");
    }

    // Toggle play/pause icon
    togglePlayPauseIcon();

    document.querySelector(".song-title").textContent = songs[index].title;
}

// Function to toggle the play/pause icon
function togglePlayPauseIcon() {
    const playPauseIcon = document.querySelector(".play-pause-button i");
    if (audio.paused) {
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    } else {
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }
}

// Function to show notification
function showNotification(message) {
    if (Notification.permission === "granted") {
        new Notification(message);
    }
}

// Function to update the audio progress bar
function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = progress + "%";

    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    document.querySelector(".time").textContent = currentTime + " / " + duration;
}

// Function to format time in minutes and seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

// Function to shuffle the songs
function shuffleSongs() {
    let currentIndex = songs.length,
        randomIndex, temporaryValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = songs[currentIndex];
        songs[currentIndex] = songs[randomIndex];
        songs[randomIndex] = temporaryValue;
    }

    // If the current song is playing, update its index
    currentSong = songs.indexOf(audio.src);
}

// Array of songs (add more songs as needed)
const songs = [
    // Add your songs here
];

const audio = new Audio();
const songList = document.querySelectorAll(".song-list li");
const shuffleButton = document.querySelector(".shuffle-button");
const playPauseButton = document.querySelector(".play-pause-button");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.querySelector(".search-overlay");
const searchInput = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const progressBar = document.querySelector(".progress-bar");

let currentSong = 0;
let isShuffle = false;

// Initially hide the search overlay
searchOverlay.style.display = "none";

// Event listener for song list items
songList.forEach((song, index) => {
    song.addEventListener("click", () => {
        playSong(index);
    });
});

// Event listener for the shuffle button
shuffleButton.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleButton.classList.toggle("active", isShuffle);
    if (isShuffle) {
        shuffleSongs();
    }
});

// Event listener for the play/pause button
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    togglePlayPauseIcon();
});

// Event listener for the previous button
prevButton.addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    playSong(currentSong);
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    playSong(currentSong);
});

// Event listener for the search icon
searchIcon.addEventListener("click", () => {
    searchOverlay.style.display = "block";
});

// Event listener for the search overlay
searchOverlay.addEventListener("click", (event) => {
    // Close the search overlay if the user clicks outside the search bar
    if (event.target === searchOverlay) {
        searchOverlay.style.display = "none";
    }
});

// Event listener for the search input
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter((song) => song.title.toLowerCase().includes(query));

    searchResults.innerHTML = "";
    filteredSongs.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = song.title;
        listItem.addEventListener("click", () => {
            playSong(songs.indexOf(song));
            searchOverlay.style.display = "none";
        });
        searchResults.appendChild(listItem);
    });
});

// Event listener for the audio player
audio.addEventListener("ended", () => {
    if (isShuffle) {
        shuffleSongs();
    } else {
        currentSong = (currentSong + 1) % songs.length;
        playSong(currentSong);
        showNotification(`Now playing: ${songs[currentSong].title}`);
    }
});

// Event listener for the progress bar for seeking
progressBar.addEventListener("click", (e) => {
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.clientWidth;
    const seekTime = (clickX / width) * audio.duration;
    audio.currentTime = seekTime;
    updateProgressBar();
});

// Update the progress bar as the audio plays
audio.addEventListener("timeupdate", updateProgressBar);
