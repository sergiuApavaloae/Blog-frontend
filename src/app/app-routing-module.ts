import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {ArticleEditComponent} from "./article-edit/article-edit.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: ArticleEditComponent},
  {path:':id',component: ArticleComponent},
  {path:'edit/:id',component:ArticleEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
