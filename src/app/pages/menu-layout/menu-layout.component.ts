import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuSidebarComponent } from "../../components/menu-sidebar/menu-sidebar.component";
import { MenuDetailComponent } from "../../components/menu-detail/menu-detail.component";

@Component({
  selector: "app-menu-layout",
  standalone: true,
  imports: [CommonModule, MenuSidebarComponent, MenuDetailComponent],
  templateUrl: "./menu-layout.component.html",
  styleUrl: "./menu-layout.component.css",
})
export class MenuLayoutComponent {
  // Logic สำหรับการสื่อสารระหว่าง sidebar และ detail component
  selectedCategory: string = "ต้ม";

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}
