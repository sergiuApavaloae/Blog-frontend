import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Route, ActivatedRoute, Router} from '@angular/router';
import {CommentService} from "./comment-service";
import { MatInputModule } from '@angular/material/input';
import {Comment} from "../shared/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit{
  private id: number;
  commentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onCommentCancel() {
    this.commentForm.reset();
  }

  onSubmit() {
    const content:Comment = {
      name: this.commentForm.value.name,
      email: this.commentForm.value.email,
      message: this.commentForm.value.message,
      postId: this.id,
      parentCommentId:0,
      postDate: Date.now(),

    }
    console.log(content)
    this.commentService.addComment(content).subscribe((comm:Comment)=>{});
  }
}
