import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestScrollComponent } from './test-scroll/test-scroll.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { CardComponent } from './card/card.component';
import {MatDividerModule,MatToolbarModule} from '@angular/material';
import { SkillContentComponent } from './skill-content/skill-content.component';
import {HotkeyModule} from 'angular2-hotkeys';
import { GameContentComponent } from './game-content/game-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GameInfoScreenComponent } from './game-info-screen/game-info-screen.component';
import { MatVideoModule } from 'mat-video';
import { IlyasContentComponent } from './ilyas-content/ilyas-content.component';
import { InfoContentComponent } from './info-content/info-content.component';
import {MatButtonModule} from '@angular/material/button';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgxImageProgressBarComponent } from './logo-progress-bar/ngx-image-progress-bar.component';
import { SafePipe } from './safe.pipe';
@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    TestScrollComponent,
    CardComponent,
    SkillContentComponent,
    GameContentComponent,
    GameInfoScreenComponent,
    IlyasContentComponent,
    InfoContentComponent,
    NavigationBarComponent,
    NgxImageProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    MatDividerModule,
    MatToolbarModule,
    HotkeyModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
