import {Component, OnInit} from '@angular/core';
import {Article} from "../shared/article";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {

  }

  isNew = false;
  form: FormGroup;
  imageUrl:string;
  private routeSub: Subscription | undefined;
  public article: Article;

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url !== '/new') {
      this.routeSub = this.route.params.subscribe(params => {
        this.apiService.readArticle(params['id']).subscribe((result: Article) => {
            this.article = result;
          }, error => {
            this.isNew = true;
          }
        )
      });
    } else {
      this.isNew = true;
    }

    this.form = this.formBuilder.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        text: ['', Validators.required],
        description: ['', Validators.required],
      }
    );
  }

  updateArticle() {
    this.apiService.updateArticles({
        id: this.article.id,
        title: this.form.value.title,
        author: this.form.value.author,
        description: this.form.value.description,
        text: this.form.value.text,
        image:this.imageUrl,
        createdAt: '',
        updatedAt: ''
      }
    ).subscribe(result => {
      this.back();
    });
    //this.back();

  }

  async postArticle() {
   await this.apiService.createArticles({
      id: 0,
      title: this.form.value.title,
      author: this.form.value.author,
      description: this.form.value.description,
      text: this.form.value.text,
      image: this.imageUrl,
      createdAt: '',
      updatedAt: ''
    }).subscribe(res => {
      this.back();
    });

  }

  getValues() {

    this.form.patchValue({
        title: this.article.title,
        author: this.article.author,
        description: this.article.description,
        text: this.article.text,
        createdAt: '',
        updatedAt: ''
      }
    )
    this.imageUrl=this.article.image;

  }

  onSelectFile(event:any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event.target.files[0].name);
      this.imageUrl=event.target.files[0].name;
      // reader.readAsDataURL(event.target.files[0]); // read file as data url
      //
      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   if(event.target)
      //     if (typeof event.target.result === "string") {
      //       this.article.image = event.target.result;
      //       console.log(this.article.image)
      //     }
      // }
    }
  }

  back(): void {
    window.history.back();
  }
}
