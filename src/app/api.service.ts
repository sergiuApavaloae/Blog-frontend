import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "./shared/article";
import {pipe, Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  API_SERVER = "http://localhost:3000";

  private _refreshNeeded=new Subject<void>()
  get refreshNeeded(){
    return this._refreshNeeded;
  }
  public readArticles(){
    return this.httpClient.get<Article[]>('http://localhost:3000/articles');
  }
  Url=''
  public readArticle(id: string){
    // this.Url=this.API_SERVER+'/articles/';
    // this.Url+=id;
    // return this.httpClient.get<Article>(this.Url);
    return this.httpClient.get<Article>(`${this.API_SERVER}/articles/${id}`)
  }
  public createArticles(article: Article){
    return this.httpClient.post<Article>(`${this.API_SERVER}/articles`, article)
      .pipe(
      tap(()=>{
        this._refreshNeeded.next();
      })
    );
  }

  public updateArticles(article: Article){
    console.log(article.title);
    console.log(article.id);
    return this.httpClient.put<Article>(`${this.API_SERVER}/articles`,article);
  }

  public deleteArticles(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/articles/${id}`)
    .pipe(
      tap(()=>{
        this._refreshNeeded.next();
      })
    );
  }
}
