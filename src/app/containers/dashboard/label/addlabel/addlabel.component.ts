import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Note} from '../../../../model/note.model';
import {Label} from '../../../../model/label';
import {LabelserviceService} from '../../../../services/labelservice.service'


@Component({
  selector: 'app-addlabel',
  templateUrl: './addlabel.component.html',
  styleUrls: ['./addlabel.component.scss']
})
export class AddlabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
