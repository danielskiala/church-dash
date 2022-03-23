import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SermonComponent } from './components/sermon/sermon.component';
import { DetailSermonComponent } from './components/detail-sermon/detail-sermon.component';
import { EventComponent } from './components/event/event.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "admin", component:AdminComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "sermon", component:SermonComponent},
  {path: "detail", component:DetailSermonComponent},
  {path: "event", component:EventComponent},
  {path: "ministries", component:MinistriesComponent},
  {path: "login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
