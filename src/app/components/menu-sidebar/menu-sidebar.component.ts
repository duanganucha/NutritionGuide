import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuService } from "../../services/menu.service";
import { MenuItem, MenuCategory } from "../../models/menu.model";

@Component({
  selector: "app-menu-sidebar",
  templateUrl: "./menu-sidebar.component.html",
  styleUrls: ["./menu-sidebar.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class MenuSidebarComponent {
  @Output() menuSelected = new EventEmitter<MenuItem>();
  categories: MenuCategory[] = [];
  allCategories: MenuCategory[] = [];
  selectedItem: MenuItem | null = null;
  loading = true;

  constructor(private menuService: MenuService) {
    this.loadMenu();
    this.menuService.selectedMenuItem$.subscribe(
      (item) => (this.selectedItem = item)
    );
  }

  async loadMenu() {
    this.loading = true;
    setTimeout(() => {
      this.categories = this.menuService.getCategories();
      this.allCategories = this.categories;
      this.loading = false;
    }, 1000); // Simulate API delay
  }

  selectMenu(item: MenuItem) {
    this.menuSelected.emit(item);
    this.menuService.selectMenuItem(item);
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.categories = this.allCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.name.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }
}
