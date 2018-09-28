import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { GridComponent } from './layout/grid/grid.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SectionAboutComponent } from './pages/section-about/section-about.component';
import { SectionFeaturesComponent } from './pages/section-features/section-features.component';
import { SectionToursComponent } from './pages/section-tours/section-tours.component';
import { SectionStoriesComponent } from './pages/section-stories/section-stories.component';
import { SectionBookComponent } from './pages/section-book/section-book.component';
import { PopupComponent } from './layout/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    FooterComponent,
    NavigationComponent,
    SectionAboutComponent,
    SectionFeaturesComponent,
    SectionToursComponent,
    SectionStoriesComponent,
    SectionBookComponent,
    PopupComponent
      ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
