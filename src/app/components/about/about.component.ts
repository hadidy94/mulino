import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutItems;

  constructor(private aboutservices: AboutService) { }

  ngOnInit(): void {
    this.aboutservices.gitAllMenu().subscribe(data =>{
      // var jsonData = JSON.stringify(data);
      this.aboutItems = data;
      // console.log(jsonData);
    })
  }

}
