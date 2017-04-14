import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { ControlsModule } from '../../Controls/controls.module';
import { PhotosModule } from './Components/Photos/photos.module';
import { VideosModule } from './Components/Videos/videos.module';

import { AppComponent } from './Components/app.component';

import { NotFoundComponent } from './Components/not-found.component';
import { HomeComponent } from './Components/Home/home.component';

import { AudiosHomeComponent } from './Components/Audios/audios-home.component';


@NgModule({
    imports: [
        BrowserModule,
        ControlsModule,
        PhotosModule,
        VideosModule,
        AppRoutingModule,
    ],
    declarations:
    [
        AppComponent, 
        AudiosHomeComponent,
        HomeComponent, NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }