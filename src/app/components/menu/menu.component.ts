import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Menu
  constructor(private Menuservice: MenuService) { }

  ngOnInit(): void {
    this.Menuservice.gitAllMenu().subscribe((data: Menu) => {
      this.menuItems = data
      console.log(data);
    });
  }

}
