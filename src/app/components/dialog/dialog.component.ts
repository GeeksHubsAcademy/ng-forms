import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostCardComponent } from 'src/app/post/post-card/post-card.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PostCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, body: string }) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
