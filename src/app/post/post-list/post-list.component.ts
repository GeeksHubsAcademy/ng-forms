import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post/post.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  displayedColumns = ['id', 'title', 'body'];
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.postService.getAllPosts();
  }
  getPosts() {
    return this.postService.getPosts();
  }
  openRemoveDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Eliminar Post ' + id, body: '¿Estás seguro de eliminar el post?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('eliminando post...', result);
      if (result) {
        this.postService.deletePost(id).subscribe(()=>{
          this.postService.getAllPosts();
        })
      }
    });
  }
}
