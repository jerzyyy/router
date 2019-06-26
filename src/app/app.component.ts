import { Component, OnInit } from '@angular/core';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS } from './app-routing.constantes';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  idDetail: number = 1
  HOME= '/'+ PATH_HOME;
  DETAIL = '/'+PATH_DETAIL;
  FORMATION = '/'+ this.DETAIL+ '/' + this.idDetail + '/' + PATH_DETAIL_FORMATIONS;
  CONNAISSANCES = '/' + this.DETAIL + '/'+ this.idDetail + '/' + PATH_DETAIL_SKILLS;
  ngOnInit() {
   /* this.router.events.subscribe((event) => {
    console.log('EVENTS', event);
    });*/
    }
}
