import { Routes } from "@angular/router";
import { VideosComponent } from "./pages/videos/videos.component";
import { BMIComponent } from "./pages/bmi/bmi.component";
import { CaloriesComponent } from "./pages/calories/calories.component";
import { IngredientsComponent } from "./pages/ingredients/ingredients.component";

import { MenuLayoutComponent } from "../pages/menu-layout/menu-layout.component";

export const routes: Routes = [
  { path: "", component: MenuLayoutComponent },
  { path: "videos", component: VideosComponent },

  { path: "bmi", component: BMIComponent },
  { path: "calories", component: CaloriesComponent },
  { path: "ingredients", component: IngredientsComponent },
];
