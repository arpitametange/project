import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
   private apiUrl = 'https://movies-ratings2.p.rapidapi.com/ratings';
  private apiKey = '371cdbda51mshdbada50ae32ed24p1b36b8jsn11f62e1ae618';

  constructor(private http: HttpClient) {}

  getMovieRating(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com'
    });

    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get(url, { headers });
  }



}
