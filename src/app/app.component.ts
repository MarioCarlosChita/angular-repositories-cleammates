import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { PostService } from './servicos/post-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  lstPosts:Post[] = [];

  constructor(private  postservice: PostService) { }

  ngOnInit(): void {
    this.carregarPosts();
    
  }


  public carregarPosts(): void {
    this.postservice.listar().subscribe((response:Post[])=>{
      this.lstPosts = response;
    })

    return;
  }

}
