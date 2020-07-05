import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NgifDetailComponent } from './ngif-detail/ngif-detail.component';
import { NgforDetailComponent } from './ngfor-detail/ngfor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    NgifDetailComponent,
    NgforDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
