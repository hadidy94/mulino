import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../../services/about.service';


interface about {
  title: string;
  body: string; 
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutItems: about;

  router: string;

  constructor(private aboutservices: AboutService, private _router: Router) { }

  ngOnInit(): void {

    this.aboutservices.gitAllMenu().subscribe((data: about) =>{
      // var jsonData = JSON.stringify(data);
      this.aboutItems = data;
      // console.log(jsonData);
    });


    this.router = this._router.url; 
     console.log(this.router);
  }




}
