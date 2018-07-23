import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**Routing */
import { AppRoutingModule } from './app-routing.module';
/**Material components */
import { 
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatChipsModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTreeModule,
  MatBottomSheetModule
} from '@angular/material';
import { AppComponent } from './app.component';
/**Pages */
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';

/**Components */
import { CsModalCropperJsComponent} from './components/cs-modal-cropperjs/cs-modal-cropperjs.component';

// Import angular-cropperjs
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [
    /**Pages */
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    TutorialsComponent,
    /**Modals */
    CsModalCropperJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    /**Material components */
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTreeModule,
    MatBottomSheetModule,
    // Load angular-cropperjs
    AngularCropperjsModule
  ],
  entryComponents: [
    CsModalCropperJsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
