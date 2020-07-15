import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'posts', component: PostListComponent,
  },
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/:id', component: PostFormComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
