import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PATH_HOME, PATH_DETAIL } from 'src/app/app-routing.constantes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  DETAIL = '/' + PATH_DETAIL;

  Observable = this.route.paramMap.subscribe((params: ParamMap) => {
    console.log('isDetail', params.get('idDetail'));
  });

  ngOnInit() {
    console.log('idDetail snapshot', this.route.snapshot.paramMap.get('idDetail'));
  }
  
  navigateToHome() {
    this.router.navigate([PATH_HOME])
  }
}
