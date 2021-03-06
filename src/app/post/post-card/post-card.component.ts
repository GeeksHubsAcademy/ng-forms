import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit, OnChanges {

  @Input() post: Post;
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnChanges(): void {
    console.log(this.post, 'OnChanges');
  }

  ngOnInit(): void {
    console.log('onInit');
  }
  openRemoveDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Eliminar Post ' + id, body: '¿Estás seguro de eliminar el post?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postService.deletePost(id).subscribe(() => {
          this.postService.getAllPosts();
        });
      }
    });
  }
}
