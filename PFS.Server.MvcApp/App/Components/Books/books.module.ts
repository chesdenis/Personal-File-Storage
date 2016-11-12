import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ControlsModule} from '../../Controls/controls.module';

import { BooksComponent } from './books.component';

import { ByTagsComponent } from './by-tags.component';
import { ByDatesComponent } from './by-dates.component';
import { NoFilterComponent } from './no-filter.component';

import { BooksService } from './books.service';

const moduleRoutes: Routes = [

    {
        path: '', component: BooksComponent,
        children: [
            { path: '', redirectTo: "/Books/Default", pathMatch: 'full' },
            { path: 'Default', component: NoFilterComponent },
            { path: 'Tags', component: ByTagsComponent },
            { path: 'Dates', component: ByDatesComponent }
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(moduleRoutes),
        ControlsModule],
    declarations: [
        BooksComponent,
        NoFilterComponent,
        ByTagsComponent,
        ByDatesComponent
    ],
    providers: [
        BooksService
    ]
})
export class BooksModule {
    
}