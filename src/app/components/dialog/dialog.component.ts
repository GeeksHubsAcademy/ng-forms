import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostListComponent } from 'src/app/post/post-list/post-list.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PostListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, body: string }) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
