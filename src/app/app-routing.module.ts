import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { MainComponent } from './main/main.component'
import { PostFormComponent } from './post/post-form/post-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'posts', component: PostListComponent,
  },
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/:id', component: PostFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
