import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'consuming-api-demo';

  posts: any[] = []

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(
      (value) => {
        this.posts = value;
      },
      (error) => {
        console.log("Error received : ", error);
      },
      () => {
        console.log("Process completed");
      }
    );
  }
}
