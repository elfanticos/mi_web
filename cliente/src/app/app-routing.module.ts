import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**Pages */
import { HomeComponent} from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
const ROUTES: Routes = [
    { path: ''       , component: HomeComponent},
    { path: 'inicio' , component: HomeComponent },
    { path: 'sobre-mi', component: AboutMeComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'tutoriales', component: TutorialsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
