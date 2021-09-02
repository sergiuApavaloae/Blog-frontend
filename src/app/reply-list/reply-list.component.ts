import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {Comment} from "../shared/comment";
import {CommentService} from "../comment/comment-service";


@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit, OnDestroy {
  @Input('commentId') commentId: number;
  @Input('postId') postId: number;
  replies:Comment[];
  showReply = false;
  togglePanel: any = {};
  replySub: Subscription;

  constructor(
    private commentService:CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {


    this.commentService.refreshNeeded
      .subscribe(()=>{this.getAllReplies()
        }
      );
    this.getAllReplies()
  }

  getAllReplies(){
    this.replySub = this.commentService.getComments(this.postId)
      .subscribe((replyList: Comment[]) => {
        this.replies = replyList;

      });
  }

  onDeleteReply(id:number) {
    this.commentService.deleteComment(id, this.commentId).subscribe(()=>{});
  }

  onReply(){
    this.showReply = (!this.showReply) ? true : false;
  }

  ngOnDestroy() {
    this.replySub.unsubscribe();
  }


}
