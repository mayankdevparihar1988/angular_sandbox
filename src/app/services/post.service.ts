import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {


  posts: Post[];
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.postUrl);
  }

 savePost(post: Post): Observable<Post> {

  return this.http.post<Post>(this.postUrl, post, httpOptions);
 }

}
