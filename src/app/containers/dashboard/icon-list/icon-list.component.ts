import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Note } from "../../../model/note.model";
import { environment } from "src/environments/environment";
import { MatSnackBar, MatDialog } from "@angular/material";
import { NoteserviceService } from "../../../services/note-service.service";
import { Color } from "../../../model/color";
import {AddlabelComponent} from '../../dashboard/label/addlabel/addlabel.component'

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {


  colorsList = [
    [
      { colorCode: "rgba(255,255,255,1)", name: "white" },
      { colorCode: "rgba(242,139,130,1)", name: "Red" },
      { colorCode: "rgba(251,188,4,1)", name: "Orange" },
      { colorCode: "rgba(255, 244, 117,1)", name: "Yellow" }
    ],
    [
      { colorCode: "rgba(204,255,144,1)", name: "Green" },
      { colorCode: "rgba(167,255,235,1)", name: "Teal" },
      { colorCode: "rgba(203,240,248,1)", name: "Blue" },
      { colorCode: "rgba( 174,203,250,1)", name: "Dark blue" }
    ],
    [
      { colorCode: "rgba(215,174,251,1)", name: "Purple" },
      { colorCode: "rgba(253,207,232,1)", name: "Pink" },
      { colorCode: "rgba(230,201,168,1)", name: "Brown" },
      { colorCode: "rgba(232,234,237,1)", name: "Gray" }
    ]
  ];



  constructor(
    private _noteService: NoteserviceService,
    private _matSnackBar: MatSnackBar,
    private _router: Router,
    private _matDialog: MatDialog

  ) {}
@Input() note: Note;

  ngOnInit() {
  }


  deleteNote() {
    console.log("note fetched for delete", this.note);
    this._noteService.deleteNote(this.note.n_id).subscribe(
      response => {
        console.log("response : ", response);
        this._matSnackBar.open(response.message + " sucessfully", "ok", {
          duration: 4000
        });
      },
      errors => {
        console.log("errors : ", errors);
        if (errors.error.statusCode === 401) {
          localStorage.clear();
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          this._matSnackBar.open(
            errors.error.message + " , login to continue.",
            "Opps!",
            {
              duration: 5000
            }
          );
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 5000
          });
        }
      }
    );
  }
  archive() {
    console.log("note fetched for archive", this.note);
    this._noteService.archiveNote(this.note.n_id).subscribe(
      response => {
        console.log("response : ", response);
        // archive
        if (response.statusCode === 200) {
          this._matSnackBar.open(response.message + " sucessfully", "ok", {
            duration: 4000
          });
          // urarchive
        } else {
          this._matSnackBar.open(response.message + " sucessfully", "ok", {
            duration: 4000
          });
        }
      },
      errors => {
        console.log("errors : ", errors);
        if (errors.error.statusCode === 401) {
          localStorage.clear();
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          this._matSnackBar.open(
            errors.error.message + " , login to continue.",
            "Opps!",
            {
              duration: 5000
            }
          );
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 4000
          });
        }
      }
    );
}

changeColor(color) {
  console.log("fetched color object : ", color);
  // transfering color information to a variable
  this._noteService.noteColor = color;
  console.log("note color from variable : ", this._noteService.noteColor);

  this._noteService
    .changeColor(
      this.note.n_id,
      this._noteService.noteColor.colorCode
    )
    .subscribe(
      response => {
        console.log("response : ", response);
        this._matSnackBar.open(response.message + " sucessfully", "ok", {
          duration: 4000
        });
      },
      errors => {
        console.log("errors : ", errors);
        if (errors.error.statusCode === 401) {
          localStorage.clear();
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          this._matSnackBar.open(
            errors.error.message + " , login to continue.",
            "Opps!",
            {
              duration: 5000
            }
          );
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 5000
          });
        }
      }
    );
}


openDialog(note): void {
  console.log("note Id:" + note.id);
  const dialogRef = this._matDialog.open(AddlabelComponent, {
    width: '250px',
    height: 'auto',

    data: { note }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}



}
