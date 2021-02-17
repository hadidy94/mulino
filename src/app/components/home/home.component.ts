import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import{ Menu } from './../../interfaces/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
menuItems: Menu;
menuaingle: Menu
  constructor(private menuservice: MenuService) { }

  ngOnInit(): void {

    this.menuservice.gitAllMenu().subscribe((data: Menu) =>{
      this.menuItems = data;
    });

  }

}
