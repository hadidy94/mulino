import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mulinoHome';
  router: any;

  constructor(private rrouter: Router){

          this.router = rrouter; 
          // console.log(this.router);
    }


}
