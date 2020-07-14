import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'http://localhost:3000/';
  private posts: Post[];
  constructor(private httpClient: HttpClient) { }

  getAllPosts(): void {
    this.httpClient.get<Post[]>(this.API_URL + 'posts')
      .subscribe(posts => this.posts = posts);
  }
  getPostById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(this.API_URL + 'posts/' + id);
  }
  insertPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.API_URL + 'posts', post);
  }
  getPosts(): Post[] {
    return this.posts;
  }
  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.API_URL + 'posts/' + post.id, post);
  }
  deletePost(id: number): Observable<object> {
    return this.httpClient.delete<object>(this.API_URL + 'posts/' + id);
  }
}
