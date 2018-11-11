import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TablebookComponent } from './home/tablebook/tablebook.component';
import { InsertbookComponent } from './home/insertbook/insertbook.component';
import { EditbookComponent } from './home/editbook/editbook.component';

import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    { 
        path: 'home', component: HomeComponent,canActivate:[AuthGuard],
        children: [{ path: '', component: TablebookComponent }]
    },
    {
        path: 'insert', component: HomeComponent,canActivate:[AuthGuard],
        children: [{ path: '', component: InsertbookComponent }]

    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'edit/:term', component: HomeComponent,canActivate:[AuthGuard],
        children: [{ path: '', component: EditbookComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];