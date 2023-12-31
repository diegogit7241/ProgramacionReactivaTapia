import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { FullNamePipe } from './shared/pipes/full-name.pipe';
import { UserTAbleComponent } from './user-table/user-table.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserComponent} from './user-component/user-component';
import { ThFontsDirective } from './th-fonts.directive';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
