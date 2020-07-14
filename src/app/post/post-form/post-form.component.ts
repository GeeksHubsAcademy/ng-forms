import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post = {
    title: '',
    body: ''
  };
  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.postService.getPostById(params.id)
          .subscribe(post => {
            this.post = post;
          });
      }
    });
  }
  submitPost(postForm: NgForm): void {
    console.log(postForm);
    if (postForm.form.status === 'VALID') {
      if (this.post.hasOwnProperty('id')) {
        this.postService.updatePost(this.post)
          .subscribe(() => this.router.navigate(['/posts']));
      } else {
        this.postService.insertPost(this.post)
          .subscribe(() => this.router.navigate(['/posts']));
      }
    }
  }
}
