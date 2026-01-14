const movies = [
  { title: "Jawan", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Jawan+full+movie" },
  { title: "Pathaan", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Pathaan+full+movie" },
  { title: "Animal", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/9/9c/Animal_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Animal+full+movie" },
  { title: "Dunki", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Dunki_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Dunki+full+movie" },
  { title: "Fighter", year: "2024", poster: "https://upload.wikimedia.org/wikipedia/en/1/19/Fighter_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Fighter+2024+full+movie" },
  { title: "Kalki 2898 AD", year: "2024", poster: "https://upload.wikimedia.org/wikipedia/en/4/4d/Kalki_2898_AD_poster.jpg", watch: "https://www.youtube.com/results?search_query=Kalki+2898+AD+full+movie" },

  { title: "Salaar", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Salaar_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Salaar+full+movie" },
  { title: "Tiger 3", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/f/f5/Tiger_3_poster.jpg", watch: "https://www.youtube.com/results?search_query=Tiger+3+full+movie" },
  { title: "12th Fail", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/8/87/12th_Fail_poster.jpg", watch: "https://www.youtube.com/results?search_query=12th+Fail+full+movie" },
  { title: "Rocky Aur Rani", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/8/8c/Rocky_Aur_Rani_Kii_Prem_Kahaani.jpg", watch: "https://www.youtube.com/results?search_query=Rocky+Aur+Rani+full+movie" },

  { title: "OMG 2", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/OMG_2_poster.jpg", watch: "https://www.youtube.com/results?search_query=OMG+2+full+movie" },
  { title: "Gadar 2", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Gadar_2_poster.jpg", watch: "https://www.youtube.com/results?search_query=Gadar+2+full+movie" },
  { title: "Dream Girl 2", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Dream_Girl_2_poster.jpg", watch: "https://www.youtube.com/results?search_query=Dream+Girl+2+full+movie" },
  { title: "Sam Bahadur", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/Sam_Bahadur_poster.jpg", watch: "https://www.youtube.com/results?search_query=Sam+Bahadur+full+movie" },

  { title: "Bawaal", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/5/59/Bawaal_poster.jpg", watch: "https://www.youtube.com/results?search_query=Bawaal+full+movie" },
  { title: "Tu Jhoothi Main Makkaar", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/5/5d/TJMM_poster.jpg", watch: "https://www.youtube.com/results?search_query=Tu+Jhoothi+Main+Makkaar" },

  { title: "Bhool Bhulaiyaa 2", year: "2022", poster: "https://upload.wikimedia.org/wikipedia/en/5/5c/Bhool_Bhulaiyaa_2_poster.jpg", watch: "https://www.youtube.com/results?search_query=Bhool+Bhulaiyaa+2+full+movie" },

  { title: "Satyaprem Ki Katha", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/7/76/Satyaprem_Ki_Katha_poster.jpg", watch: "https://www.youtube.com/results?search_query=Satyaprem+Ki+Katha+full+movie" },

  { title: "Adipurush", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/8/87/Adipurush_poster.jpg", watch: "https://www.youtube.com/results?search_query=Adipurush+full+movie" },

  { title: "Shehzada", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/4/44/Shehzada_poster.jpg", watch: "https://www.youtube.com/results?search_query=Shehzada+full+movie" },

  { title: "Mission Majnu", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Mission_Majnu_poster.jpg", watch: "https://www.youtube.com/results?search_query=Mission+Majnu+full+movie" },

  { title: "Selfiee", year: "2023", poster: "https://upload.wikimedia.org/wikipedia/en/2/22/Selfiee_poster.jpg", watch: "https://www.youtube.com/results?search_query=Selfiee+full+movie" },

  { title: "Thank God", year: "2022", poster: "https://upload.wikimedia.org/wikipedia/en/1/18/Thank_God_poster.jpg", watch: "https://www.youtube.com/results?search_query=Thank+God+full+movie" },

  { title: "JugJugg Jeeyo", year: "2022", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/JugJugg_Jeeyo_poster.jpg", watch: "https://www.youtube.com/results?search_query=JugJugg+Jeeyo+full+movie" },

  { title: "Drishyam 2", year: "2022", poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Drishyam_2_2022.jpg", watch: "https://www.youtube.com/results?search_query=Drishyam+2+full+movie" },

  { title: "RRR (Hindi)", year: "2022", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", watch: "https://www.youtube.com/results?search_query=RRR+Hindi+full+movie" },

  { title: "Shershaah", year: "2021", poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/Shershaah_film_poster.jpg", watch: "https://www.youtube.com/results?search_query=Shershaah+full+movie" }
];

const moviesDiv = document.getElementById("movies");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.poster}">
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <a href="${movie.watch}" target="_blank">
        <button>🎬 Watch Now</button>
      </a>
    </div>
  `;

  moviesDiv.appendChild(card);
});
