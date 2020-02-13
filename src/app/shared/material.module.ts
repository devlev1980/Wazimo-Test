import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocomplete, MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatSortModule,
  MatTableModule, MatTooltipModule, MatTreeModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTreeModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTreeModule
  ]

})
export class MaterialModule {
}

