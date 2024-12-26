import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, RouterModule } from "@angular/router";
import { routes } from "./app/app.routes";
import { TopbarComponent } from "./app/components/topbar/topbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, TopbarComponent],
  template: `
    <app-topbar></app-topbar>
    <div style="padding-top:80px">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``],
})
export class App {
  name = "ระบบเมนูอาหารสำหรับนักโภชนาการ";
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
