import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import {CommentService} from "../comment/comment-service";
import {Comment} from "../shared/comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {
  postId: number;
  comments:Comment[];
  showReply = false;
  togglePanel: any = {};
  commentSub: Subscription;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.commentService.refreshNeeded
      .subscribe(()=>{this.getAllComments()
        }
      );
    this.postId = this.route.snapshot.params.id;
    this.getAllComments()
  }

  getAllComments(){
    this.commentSub = this.commentService.getComments(this.postId)
      .subscribe((commentList: Comment[]) => {
        this.comments = commentList;
      });
  }

  onDeleteComment(id:number) {
   this.commentService.deleteComment(id, this.postId).subscribe(()=>{});
  }

  onReply(){
    this.showReply = (!this.showReply) ? true : false;
  }
  ngOnDestroy() {
    this.commentSub.unsubscribe();
  }
}
