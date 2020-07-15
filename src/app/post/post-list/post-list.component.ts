import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post/post.service';
import { Post } from 'src/app/models/post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displayedColumns = ['id', 'title', 'body'];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts();
  }
  getPosts(): Post[] {
    return this.postService.getPosts();
  }
  
}
