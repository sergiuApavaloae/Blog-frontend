import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing-module";
import {HttpClientModule} from "@angular/common/http";
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CommentComponent } from './comment/comment.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { CommentListComponent } from './comment-list/comment-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";
import { MatInputModule } from '@angular/material/input';
import { ReplyComponent } from './reply/reply.component';
import { ReplyListComponent } from './reply-list/reply-list.component';
import {AuthComponent} from "./auth/auth.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleEditComponent,
    CommentComponent,
    CommentListComponent,
    ReplyComponent,
    ReplyListComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
