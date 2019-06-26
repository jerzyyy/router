import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_DETAIL } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }
  idDetail: number = 1;
  ngOnInit() {
  }
  navigateToDetail(){
    this.router.navigate([PATH_DETAIL, this.idDetail])
  }

}
