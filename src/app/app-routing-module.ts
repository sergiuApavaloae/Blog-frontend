import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {ArticleEditComponent} from "./article-edit/article-edit.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: 'articles', component: HomeComponent },
  {path: 'new', component: ArticleEditComponent},
  {path:'auth',component:AuthComponent},
  {path:'articles/:id',component: ArticleComponent},
  {path:'articles/:id/edit',component:ArticleEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
