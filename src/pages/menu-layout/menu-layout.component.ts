// menu-layout.component.ts
import { Component } from "@angular/core";
import { MenuItem } from "../../app/models/menu.model";
import { MenuService } from "../../app/services/menu.service";
import { MenuSidebarComponent } from "../../app/components/menu-sidebar/menu-sidebar.component";
import { MenuDetailComponent } from "../../app/components/menu-detail/menu-detail.component";

@Component({
  selector: "app-menu-layout",
  templateUrl: "./menu-layout.component.html",
  styleUrls: ["./menu-layout.component.scss"],
  standalone: true,
  imports: [MenuSidebarComponent, MenuDetailComponent],
})
export class MenuLayoutComponent {
  selectedMenuItem: MenuItem | null = null;

  constructor(private menuService: MenuService) {
    this.menuService.selectedMenuItem$.subscribe(
      (item) => (this.selectedMenuItem = item)
    );
  }

  onMenuSelected(item: MenuItem) {
    this.menuService.selectMenuItem(item);
  }
}
