import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { GirlpoweredComponent } from './girlpowered/girlpowered.component';
import { ResourcesComponent } from './resources/resources.component';
import { CaddingComponent } from './cadding/cadding.component';
import { NotebookComponent } from './notebook/notebook.component'
import { ProgrammingComponent } from './programming/programming.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChickfilaComponent } from './chickfila/chickfila.component';
import { VexuComponent } from './vexu/vexu.component';
import { CommunityComponent } from './community/community.component';
import { EastwoodmiddleComponent } from './eastwoodmiddle/eastwoodmiddle.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    GirlpoweredComponent,
    ResourcesComponent,
    CaddingComponent,
    NotebookComponent,
    ProgrammingComponent,
    HomescreenComponent,
    ChickfilaComponent,
    VexuComponent,
    CommunityComponent,
    EastwoodmiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
