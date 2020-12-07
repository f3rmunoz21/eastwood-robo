import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { AboutusComponent } from './aboutus/aboutus.component'
import { GirlpoweredComponent } from './girlpowered/girlpowered.component'
import { SixteenComponent } from './girlpowered/sixteen/sixteen.component'
import { SeventeenComponent } from './girlpowered/seventeen/seventeen.component'
import { EighteenComponent } from './girlpowered/eighteen/eighteen.component'
import { NineteenComponent } from './girlpowered/nineteen/nineteen.component'
import { TwentyComponent } from './girlpowered/twenty/twenty.component'
import { ResourcesComponent } from './resources/resources.component'
import { CaddingComponent } from './cadding/cadding.component'
import { NotebookComponent } from './notebook/notebook.component'
import { ProgrammingComponent } from './programming/programming.component'
import { ChickfilaComponent } from './chickfila/chickfila.component'
import { VexuComponent } from './vexu/vexu.component'
import { CommunityComponent } from './community/community.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomescreenComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'girlpowered', component: GirlpoweredComponent}, 
  { path: 'sixteen', component: SixteenComponent},
  { path: 'seventeen', component: SeventeenComponent },
  { path: 'eighteen', component: EighteenComponent},
  { path: 'nineteen', component: NineteenComponent}, 
  { path: 'twenty', component: TwentyComponent }, 
  { path: 'resources', component: ResourcesComponent }, 
  { path: 'cadding', component: CaddingComponent}, 
  { path: 'notebook', component: NotebookComponent}, 
  { path: 'programming', component: ProgrammingComponent}, 
  { path: 'chickfila', component: ChickfilaComponent }, 
  { path: 'vexu', component: VexuComponent },
  { path: 'community', component: CommunityComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
