import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url)
  }
}
