import { Input, Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CommentService} from "../comment/comment-service";
import {Comment} from "../shared/comment";

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Output('repCancel') repCancel: boolean;
  @Input('commentId') commentId: number;
  @Input('postId') postId: number;
  @Input('replyId') replyId: string;
  replyForm: FormGroup;

  constructor(
    private commentService:CommentService,
    private fb: FormBuilder,
  ) {}


  ngOnInit() {

    this.replyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get cId() {
    return this.commentId;
  }
  get pId() {
    return this.postId;
  }
  onReplyCancel() {
    // this.repCancel = false;

    // this.replyForm.reset();
  }

  onSubmit() {
    const submittedVal = {
      id:0,
      name: this.replyForm.value.name,
      email: this.replyForm.value.email,
      message: this.replyForm.value.message,
      commentId: this.commentId,
      postId:this.postId,
      postDate: Date.now()
    }
    console.log(submittedVal);
    this.commentService.addComment(submittedVal).subscribe((comm:Comment)=>{});
  }
}
