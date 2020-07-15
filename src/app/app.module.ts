import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PostListComponent } from './post/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './post/post-form/post-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './user/login/login.component';
import { DirectiveExampleDirective } from './directive-example.directive';
import { PostCardComponent } from './post/post-card/post-card.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostListComponent,
    PostFormComponent,
    WelcomeComponent,
    DialogComponent,
    HeaderComponent,
    LoginComponent,
    DirectiveExampleDirective,
    PostCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
