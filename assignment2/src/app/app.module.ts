import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { HeaderboxComponent } from './headerbox/headerbox.component';
import { GalleryboxComponent } from './gallerybox/gallerybox.component';
import { FooterboxComponent } from './footerbox/footerbox.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentboxComponent,
    HeaderboxComponent,
    GalleryboxComponent,
    FooterboxComponent,
    MenubarComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
