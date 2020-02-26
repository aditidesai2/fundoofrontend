import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatTooltipModule ,
  MatIconModule,
  MatToolbarModule

} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';
 



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class MaterialModule { }
