import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './_components/home/home.component';
import {MaterialsComponent} from './_components/materials/materials.component';
import {ContactComponent} from './_components/contact/contact.component';


const routes: Routes = [
    {path: 'acasa', component: HomeComponent},
    {path: 'materiale', component: MaterialsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/acasa', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
