import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../shared/comment";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }
  API_SERVER = "http://localhost:3000";
  private _refreshNeeded=new Subject<void>()

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  public addComment(comment: Comment)
  {
    console.log(comment)
    return this.httpClient.post<Comment>(`${this.API_SERVER}/comments/${comment.postId}`, comment)
      .pipe(
        tap(()=>{
          this._refreshNeeded.next();
        })
      );
  }
  public getComments(postId:number){
    return this.httpClient.get<Comment[]>(`${this.API_SERVER}/comments/${postId}`);
  }

  public deleteComment(id:number,postId:number){
    return this.httpClient.delete<Comment[]>(`${this.API_SERVER}/comments/${postId}/${id}`)
      .pipe(
        tap(()=>{
          this._refreshNeeded.next();
        })
      );;
  }
}
