import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Article} from "../shared/article";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  articles: Article[] = []

  ngOnInit(): void {
    this.apiService.refreshNeeded
      .subscribe(()=>{this.getAllArticles()
        }
      );
    this.getAllArticles();
  }
  getAllArticles(){
    this.apiService.readArticles().subscribe((result: Article[]) => {
        this.articles = result;
      }
    )
  }
  access(id:number)
    {
      const url='articles/'+id;

      this.router.navigateByUrl(url);
  }
  edit(id:number)
  {
    const url='articles/'+id+'/edit';

    this.router.navigateByUrl(url);
  }
  newArticle()
  {
    this.router.navigateByUrl('new')
  }
  authenticate()
  {
    this.router.navigateByUrl('auth')
  }
  deleteArticle(id:number){
    this.apiService.deleteArticles(id).subscribe(
      (res)=>{}
    )
  }
}
