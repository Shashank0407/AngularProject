import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProfilePageComponent } from './profile-page/profile-page.component'


const routes: Routes = [
  {path: '', component: MyComponentComponent},
  {path: 'profile', component: ProfilePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
