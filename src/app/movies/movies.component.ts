import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
   movieRating: any;
  movieId = 'tt0111161';  // Example: The Shawshank Redemption
  movieData: any;

  constructor(private movieService: MainService) {}

 ngOnInit() {
    // Sample data you gave
    this.movieData = {
      tmdbId: 278,
      imdbId: 'tt0111161',
      lastUpdated: 1738173381282,
      ratings: {
        imdb: 9.3,
        rottenTomatoes: 91,
        metacritic: 80
      },
      media: {
        title: 'The Shawshank Redemption',
        year: 1994,
        poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
      }
    };
    this.fetchMovieRating()
    this.getLastUpdatedDate()
  }

  fetchMovieRating() {
    this.movieService.getMovieRating(this.movieId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.movieRating = response;
      },
      error: (err: any) => {
        console.error('Error fetching rating:', err);
      }
    });
  }

    getLastUpdatedDate(): string {
    if (!this.movieData?.lastUpdated) return '';
    return new Date(this.movieData.lastUpdated).toLocaleString();
  }

}

