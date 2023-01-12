import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiltonmainComponent } from './components/hiltonmain/hiltonmain.component';

const routes: Routes = [
  {path:'', component: HiltonmainComponent},
  {path :'', redirectTo:'hiltonmain', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
