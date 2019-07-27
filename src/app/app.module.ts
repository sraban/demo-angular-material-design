import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatBadgeModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ReactiveFormOneComponent, DialogContentExampleDialog, DialogOverviewExampleDialog, TablePaginationExample } from './reactive-form-one/reactive-form-one.component';
import { ReactiveFormTwoComponent } from './reactive-form-two/reactive-form-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormOneComponent,
    ReactiveFormTwoComponent,
    DialogContentExampleDialog,
    DialogOverviewExampleDialog,
    TablePaginationExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
