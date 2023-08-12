// Sample list of songs by different artists





const songsByArtist = {

  'All': [
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
    { title: 'Dil_Ke_Pass', src: '/arman/Dil_Ke_Pass.mp3' },
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
  ],




  'Arijit Singh': [
    { title: 'Aabaad Barbaad', src: '/arijit/Aabaad_Barbaad.mp3' },
    { title: 'Baatein ye kabhi na', src: '/arijit/Baatein_Ye_Kabhi_Na.mp3' },
    { title: 'Kesariya', src: '/arijit/Kesariya.mp3' },
    { title: 'Tere Hawaale', src: '/arijit/Tere_Hawaale.mp3' },
    { title: 'Tu Hai To Mujhe ', src: '/arijit/Tu_Hai_to_Mujhe.mp3' },
    { title: 'Woh Din', src: '/arijit/Woh_Din.mp3' },
  ],
  'Darshan Rawal': [
    { title: 'Hawa_Banke', src: '/darshan/Hawa_Banke.mp3' },
    { title: 'Mere Mahiye Jinna Sona', src: 'song1.mp3' },
    { title: 'Saari_Ki_Saari_2.0', src: '/darshan/Saari_Ki_Saari_2.0.mp3' },
    { title: 'Tere_Naal', src: '/darshan/Tere_Naal.mp3' },
    { title: 'Teri_Aankhon_Mein', src: '/darshan/Teri_Aankhon_Mein.mp3' },
    { title: 'Tu_Mileya', src: '/darshan/Tu_Mileya.mp3' },
  ],
  'Arman Malik': [
    { title: 'Besabriyaan', src: '/arman/Besabriyaan.mp3' },
    { title: 'Dil_Ke_Pass', src: '/arman/Dil_Ke_Pass.mp3' },
    { title: 'Jaane_Na_Dunga_Kahin', src: '/arman/Jaane_Na_Dunga_Kahin.mp3' },
    { title: 'Jab_Tak', src: '/arman/Jab_Tak.mp3' },
    { title: 'Kyun_Rabba', src: '/arman/Kyun_Rabba.mp3' },
    { title: 'Mujhe_Pyaar_Pyaar_Hai', src: '/arman/Mujhe_Pyaar_Pyaar_Hai.mp3' },
  ],
  'Badsha': [
    { title: 'Dj_Waley_Babu', src: '/badsha/Dj_Waley_Babu.mp3' },
    { title: 'Fly', src: '/badsha/Fly.mp3' },
    { title: 'Garmi', src: '/badsha/Garmi.mp3' },
    { title: 'Genda_Phool', src: '/badsha/Genda_Phool.mp3' },
    { title: 'Jugnu', src: '/badsha/Jugnu.mp3' },
    { title: 'Kamaal_Hai', src: '/badsha/Kamaal_Hai.mp3' },
    { title: 'Sanak', src: '/badsha/Sanak.mp3' },
  ],
  'B Praak': [
    { title: 'Baarish_Ki_Jaaye', src: '/bprak/Baarish_Ki_Jaaye.mp3' },
    { title: 'Dil_Tod_Ke', src: '/bprak/Dil_Tod_Ke.mp3' },
    { title: 'Kya_Loge_Tum', src: '/bprak/Kya_Loge_Tum.mp3' },
    { title: 'Mann_Bharrya_2.0', src: '/bprak/Mann_Bharrya_2.0.mp3' },
    { title: 'Meri_Jaan_Meri_Jaan', src: '/bprak/Meri_Jaan_Meri_Jaan.mp3' },
    { title: 'Ranjha', src: '/bprak/Ranjha.mp3' },
  ],
  'Hardy Sandhu': [
    { title: 'Backbone', src: '/hardy/Backbone.mp3' },
    { title: 'Bijlee_Bijlee', src: '/hardy/Bijlee_Bijlee.mp3' },
    { title: 'Kyaa_Baat_Haii_2.0', src: '/hardy/Kyaa_Baat_Haii_2.0.mp3' },
    { title: 'Naah', src: '/hardy/Naah.mp3' },
    { title: 'Titliyaan_Warga', src: '/hardy/Titliyaan_Warga.mp3' },
  ],
  'Jubin Nautiyal': [
    { title: 'Jaadui', src: '/jubin/Jaadui.mp3' },
    { title: 'Lut_Gaye', src: '/jubin/Lut_Gaye.mp3' },
    { title: 'Mere_Ghar_Ram_Aaye_Hain', src: '/jubin/Mere_Ghar_Ram_Aaye_Hain.mp3' },
    { title: 'Meri_Maa_Ke_Barabar_Koi_Nahi', src: '/jubin/Meri_Maa_Ke_Barabar_Koi_Nahi.mp3' },
    { title: 'Rattan_lambiyan', src: '/jubin/Rattan_lambiyan.mp3' },
    { title: 'Rim_Jhim', src: '/jubin/Rim_Jhim.mp3' },
    { title: 'Shri_Krishna_Govind', src: '/jubin/Shri_Krishna_Govind.mp3' },
    { title: 'Toh_Aagaye_Hum', src: '/jubin/Toh_Aagaye_Hum.mp3' },
  ],
  'Milind Gaba': [
    { title: 'Daaru_Party', src: '/mg/Daaru_Party.mp3' },
    { title: 'Main_Teri_Ho_Gayi', src: '/mg/Main_Teri_Ho_Gayi.mp3' },
    { title: 'Naam', src: '/mg/Naam.mp3' },
    { title: 'Nazar_Lag_Jayegi', src: '/mg/Nazar_Lag_Jayegi.mp3' },
    { title: 'Shanti', src: '/mg/Shanti.mp3' },
    { title: 'She_Dont_Know', src: '/mg/She_Dont_Know.mp3' },
    { title: 'Sohnea', src: '/mg/Sohnea.mp3' },
  ],
  'Neha Kakkar': [
    { title: 'Dil_Ko_Karaar_Aaya', src: '/neha/Dil_Ko_Karaar_Aaya.mp3' },
    { title: 'Nehu_Da_Vyah', src: '/neha/Nehu_Da_Vyah.mp3' },
    
  ],
  'Sachet Tandon': [
    { title: 'Chura_Liya', src: '/sachet/Chura_Liya.mp3' },
    { title: 'Jind_Meriye', src: '/sachet/Jind_Meriye.mp3' },
    { title: 'Malang_Sajna', src: '/sachet/Malang_Sajna.mp3' },
    { title: 'Ram_Siya_Ram_2.0', src: '/sachet/Ram_Siya_Ram_2.0.mp3' },
    { title: 'Takdaa_Rawaan', src: '/sachet/Takdaa_Rawaan.mp3' },
  ],

  // Add more artists and their songs here
};


// JavaScript to show the popup and check promo code
// document.addEventListener('DOMContentLoaded', function () {
//   const popup = document.getElementById('promoPopup');

//   // Show the popup when the page loads
//   popup.style.display = 'block';
// });

// function checkPromoCode() {
//   const promoCodeInput = document.getElementById('promoCodeInput');
//   const promoCode = promoCodeInput.value.trim();

//   // Check if the entered promo code is correct
//   if (promoCode === '2952'|| promoCode === '3011') {
//     const popup = document.getElementById('promoPopup');
//     popup.style.display = 'none'; // Hide the popup

//     // Add your code here to allow the user to continue the website
//   } else {
//     alert('Invalid promo code. Please try again.'); // Display an error message
//   }
// }






let currentAudio = null;




function showSongsByArtist(artist) {
  const songList = document.getElementById('song-list');
  const songListHeader = document.getElementById('artist-heading'); // Get the custom h2 element
  songList.innerHTML = '';

  if (songsByArtist.hasOwnProperty(artist)) {
    const songs = songsByArtist[artist];
    songs.forEach((song, index) => {
      const li = document.createElement('li');
      li.textContent = song.title;
      li.setAttribute('data-artist', artist); // Store the artist's name as a data attribute
      li.setAttribute('data-index', index);
      li.addEventListener('click', playSong);
      songList.appendChild(li);
    });
  }

  // Set the header to display the artist's name
  songListHeader.textContent = `Songs by ${artist}`;
}

function playSong(event) {
  const artist = event.target.getAttribute('data-artist');
  const index = event.target.getAttribute('data-index');
  const songs = songsByArtist[artist];
  const song = songs[index];

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const musicPlayer = document.getElementById('music-player');
  const audioElement = document.createElement('audio');
  audioElement.controls = true;
  audioElement.autoplay = true;
  audioElement.innerHTML = `
    <source src="${song.src}" type="audio/mpeg">
    Your browser does not support the audio element.
  `;
  musicPlayer.innerHTML = ''; // Remove any existing audio elements
  musicPlayer.appendChild(audioElement);

  // Display the current playing song title in the music player
  const songTitle = document.createElement('h2');
  songTitle.textContent ="Playing:-   " +  song.title;
  musicPlayer.appendChild(songTitle);

  currentAudio = audioElement;
  markActiveArtistLink(artist); // Mark the corresponding artist link as active
}









function markActiveArtistLink(artist) {
  const artistLinks = document.querySelectorAll('nav a');
  artistLinks.forEach(link => {
    link.classList.remove('active');
    if (link.textContent === artist) {
      link.classList.add('active');
    }
  });
}




// Function to handle click events on artist links
function handleArtistClick(event) {
  event.preventDefault();
  const artist = event.target.textContent;
  showSongsByArtist(artist);
  markActiveArtistLink(artist);
}

function createSongList() {
  const songList = document.getElementById('song-list');
  const defaultArtist = Object.keys(songsByArtist)[0];
  showSongsByArtist(defaultArtist);
  markActiveArtistLink(defaultArtist);

  // Add click event listeners to artist links
  const artistLinks = document.querySelectorAll('nav a');
  artistLinks.forEach(link => {
    link.addEventListener('click', handleArtistClick);
  });
}






document.addEventListener('DOMContentLoaded', createSongList);