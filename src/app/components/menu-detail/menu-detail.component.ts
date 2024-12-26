import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItem } from "../../models/menu.model";

@Component({
  selector: "app-menu-detail",
  templateUrl: "./menu-detail.component.html",
  styleUrls: ["./menu-detail.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class MenuDetailComponent {
  @Input() selectedItem: MenuItem | null = null;
  getName(name: any) {
    var a = "menu/" + name + ".png";
    console.log(a);
    return "menu/" + name + ".png";
  }
}
