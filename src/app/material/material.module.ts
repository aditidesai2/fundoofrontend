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
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule
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
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule
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
    CommonModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
