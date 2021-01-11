import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryService} from './dictionary.service';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
