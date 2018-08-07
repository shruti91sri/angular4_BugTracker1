import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BugTrackerComponent } from './bugTracker/bug-tracker/bug-tracker.component';
import { BugOperationsService } from './bugTracker/bug-tracker/services/bug-operations.service';
import { TrimTextPipe } from './bugTracker/bug-tracker/pipe/trim-text.pipe';
import { SortPipe } from './bugTracker/bug-tracker/pipe/sort.pipe';
import { ClosedCountPipe } from './bugTracker/bug-tracker/pipe/closed-count.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BugTrackerComponent, TrimTextPipe, SortPipe, ClosedCountPipe ],
  bootstrap:    [ AppComponent ],
  providers: [BugOperationsService]
})
export class AppModule { }
