// JavaScript code for controlling the custom audio player and search functionality

// Function to play a song
function playSong(index) {
    if (currentSong !== index || audio.src !== songs[index].src) {
        currentSong = index;
        audio.src = songs[index].src;
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
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
    { title: 'Aabaad Barbaad', src: '/arijit/Aabaad_Barbaad.mp3' },
    { title: 'Baatein ye kabhi na', src: '/arijit/Baatein_Ye_Kabhi_Na.mp3' },
    { title: 'Kesariya', src: '/arijit/Kesariya.mp3' },
    { title: 'Tere Hawaale', src: '/arijit/Tere_Hawaale.mp3' },
    { title: 'Tu Hai To Mujhe ', src: '/arijit/Tu_Hai_to_Mujhe.mp3' },
    { title: 'Woh Din', src: '/arijit/Woh_Din.mp3' },
    { title: 'Hawa_Banke', src: '/darshan/Hawa_Banke.mp3' },
    { title: 'Mere Mahiye Jinna Sona', src: 'song1.mp3' },
    { title: 'Saari_Ki_Saari_2.0', src: '/darshan/Saari_Ki_Saari_2.0.mp3' },
    { title: 'Tere_Naal', src: '/darshan/Tere_Naal.mp3' },
    { title: 'Teri_Aankhon_Mein', src: '/darshan/Teri_Aankhon_Mein.mp3' },
    { title: 'Tu_Mileya', src: '/darshan/Tu_Mileya.mp3' },
    { title: 'Besabriyaan', src: '/arman/Besabriyaan.mp3' },
    { title: 'Dil_Ke_Paas', src: '/arman/Dil_Ke_Paas.mp3' },
    { title: 'Jaane_Na_Dunga_Kahin', src: '/arman/Jaane_Na_Dunga_Kahin.mp3' },
    { title: 'Jab_Tak', src: '/arman/Jab_Tak.mp3' },
    { title: 'Kyun_Rabba', src: '/arman/Kyun_Rabba.mp3' },
    { title: 'Mujhe_Pyaar_Pyaar_Hai', src: '/arman/Mujhe_Pyaar_Pyaar_Hai.mp3' },
    { title: 'Dj_Waley_Babu', src: '/badsha/Dj_Waley_Babu.mp3' },
    { title: 'Fly', src: '/badsha/Fly.mp3' },
    { title: 'Garmi', src: '/badsha/Garmi.mp3' },
    { title: 'Genda_Phool', src: '/badsha/Genda_Phool.mp3' },
    { title: 'Jugnu', src: '/badsha/Jugnu.mp3' },
    { title: 'Kamaal_Hai', src: '/badsha/Kamaal_Hai.mp3' },
    { title: 'Sanak', src: '/badsha/Sanak.mp3' },
    { title: 'Baarish_Ki_Jaaye', src: '/bprak/Baarish_Ki_Jaaye.mp3' },
    { title: 'Dil_Tod_Ke', src: '/bprak/Dil_Tod_Ke.mp3' },
    { title: 'Kya_Loge_Tum', src: '/bprak/Kya_Loge_Tum.mp3' },
    { title: 'Mann_Bharrya_2.0', src: '/bprak/Mann_Bharrya_2.0.mp3' },
    { title: 'Meri_Jaan_Meri_Jaan', src: '/bprak/Meri_Jaan_Meri_Jaan.mp3' },
    { title: 'Ranjha', src: '/bprak/Ranjha.mp3' },
    { title: 'Backbone', src: '/hardy/Backbone.mp3' },
    { title: 'Bijlee_Bijlee', src: '/hardy/Bijlee_Bijlee.mp3' },
    { title: 'Kyaa_Baat_Haii_2.0', src: '/hardy/Kyaa_Baat_Haii_2.0.mp3' },
    { title: 'Naah', src: '/hardy/Naah.mp3' },
    { title: 'Titliyaan_Warga', src: '/hardy/Titliyaan_Warga.mp3' },
    { title: 'Jaadui', src: '/jubin/Jaadui.mp3' },
    { title: 'Lut_Gaye', src: '/jubin/Lut_Gaye.mp3' },
    { title: 'Mere_Ghar_Ram_Aaye_Hain', src: '/jubin/Mere_Ghar_Ram_Aaye_Hain.mp3' },
    { title: 'Meri_Maa_Ke_Barabar_Koi_Nahi', src: '/jubin/Meri_Maa_Ke_Barabar_Koi_Nahi.mp3' },
    { title: 'Rattan_lambiyan', src: '/jubin/Rattan_lambiyan.mp3' },
    { title: 'Rim_Jhim', src: '/jubin/Rim_Jhim.mp3' },
    { title: 'Shri_Krishna_Govind', src: '/jubin/Shri_Krishna_Govind.mp3' },
    { title: 'Toh_Aagaye_Hum', src: '/jubin/Toh_Aagaye_Hum.mp3' },
    { title: 'Daaru_Party', src: '/mg/Daaru_Party.mp3' },
    { title: 'Main_Teri_Ho_Gayi', src: '/mg/Main_Teri_Ho_Gayi.mp3' },
    { title: 'Naam', src: '/mg/Naam.mp3' },
    { title: 'Nazar_Lag_Jayegi', src: '/mg/Nazar_Lag_Jayegi.mp3' },
    { title: 'Shanti', src: '/mg/Shanti.mp3' },
    { title: 'She_Dont_Know', src: '/mg/She_Dont_Know.mp3' },
    { title: 'Sohnea', src: '/mg/Sohnea.mp3' },
    { title: 'Dil_Ko_Karaar_Aaya', src: '/neha/Dil_Ko_Karaar_Aaya.mp3' },
    { title: 'Nehu_Da_Vyah', src: '/neha/Nehu_Da_Vyah.mp3' },
    { title: 'Chura_Liya', src: '/sachet/Chura_Liya.mp3' },
    { title: 'Jind_Meriye', src: '/sachet/Jind_Meriye.mp3' },
    { title: 'Malang_Sajna', src: '/sachet/Malang_Sajna.mp3' },
    { title: 'Ram_Siya_Ram_2.0', src: '/sachet/Ram_Siya_Ram_2.0.mp3' },
    { title: 'Takdaa_Rawaan', src: '/sachet/Takdaa_Rawaan.mp3' },
    // Add more songs here
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
