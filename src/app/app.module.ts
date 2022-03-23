import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AdminComponent } from './components/admin/admin.component';
import { SermonComponent } from './components/sermon/sermon.component';
import { DetailSermonComponent } from './components/detail-sermon/detail-sermon.component';
import { EventComponent } from './components/event/event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { NavResponDashComponent } from './components/nav-respon-dash/nav-respon-dash.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    GalleryComponent,
    AdminComponent,
    SermonComponent,
    DetailSermonComponent,
    EventComponent,
    EventDetailComponent,
    MinistriesComponent,
    NavResponDashComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
