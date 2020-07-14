import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService, private router:Router) { }

  ngOnInit(): void {
  }
  submitPost(postForm: NgForm): void {
    console.log(postForm);
    if (postForm.form.status === 'VALID') {
      this.postService.insertPost(postForm.form.value)
        .subscribe(()=>{
          this.router.navigate(['/posts']);
        });
    }
  }
}
