import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable({ providedIn: 'root' })

export class PostService {
   private baseUrl: string = "https://jsonplaceholder.typicode.com";
   private pathUrl: string = "/posts";

    constructor(private http: HttpClient) { }

    public  listar():Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl + this.pathUrl );  
      }

 
}