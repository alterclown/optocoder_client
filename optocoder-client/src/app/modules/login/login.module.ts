import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from '@angular/router';

const route: Routes = [
    {
        path: '', component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(route),
    ],

    providers: [],
})
export class LoginModule {
}
