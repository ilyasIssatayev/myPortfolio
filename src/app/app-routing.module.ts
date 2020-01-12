import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameInfoScreenComponent } from "../app/game-info-screen/game-info-screen.component";
import { TestScrollComponent } from "../app/test-scroll/test-scroll.component";
const routes: Routes = [
  // { path: "", component: TestScrollComponent },
  // { path: "DontFall", component: GameInfoScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
