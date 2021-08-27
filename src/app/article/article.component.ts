import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Article} from "../shared/article";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
             ) {
  }
  private routeSub: Subscription | undefined ;
  public article : Article | undefined;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {

      this.apiService.readArticle(params['id']).subscribe((result: Article) => {
          this.article = result;

        }
      )
    });

  }
  back():void {
    window.history.back();
  }
}
