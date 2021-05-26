import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bdbfront';

  constructor(private router:Router){}
  ngOnInit(): void {
    this.list();
  }

  list(){
    this.router.navigate(["list"]);
  }
  
  new(){
    this.router.navigate(["create"]);
  }
}
