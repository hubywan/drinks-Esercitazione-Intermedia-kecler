import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProfiloComponent } from "./profilo/profilo.component";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [
        AppComponent,
        TopBarComponent,
        HomeComponent,
        ProfiloComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
