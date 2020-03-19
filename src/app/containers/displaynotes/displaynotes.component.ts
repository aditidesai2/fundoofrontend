import { Component, OnInit, Input } from "@angular/core";
import { NoteserviceService } from "../../services/note-service.service";
import { MatSnackBar,MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Note } from "src/app/model/note.model";
import {UpdateNoteComponent} from "../dashboard/update-note/update-note.component"
import {environment} from "../../../environments/environment"

@Component({
  selector: "app-displaynotes",
  templateUrl: "./displaynotes.component.html",
  styleUrls: ["./displaynotes.component.scss"]
})
export class DisplaynotesComponent implements OnInit {


  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _noteService: NoteserviceService,
    private dialog: MatDialog,
  ) {}

  
  pin: boolean = true;
  unpin: boolean = true;
  private expand: any = false;
  @Input() notes: Note[];
  isPinned: boolean;

  ngOnInit() {
    this._noteService.autoRefesh.subscribe(() => {
      this.getAllNotes();
    });
    this.getAllNotes();
  }
  getAllNotes() {
    console.log("get note called");
    this._noteService.getNote().subscribe((response: any) => {
      this.notes = response.notes;
      console.log("response ++++", response);
      console.log("all the notes in list notes", this.notes);
      console.log("value", this.notes.toString);
    });
  }
  openPopup(note: any) {
    // const dialogRef = this.dialog.open(EditnoteComponent, {
    data: note;
  }


  openDialog(note): void {
    console.log("note Id:" + note.id);
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: 'auto',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}


onPinNote(n_id) {
  console.log('pin note called '+n_id);
  this._noteService.pinUnpinNote(n_id).subscribe(response => {
    if(!this.pin) {
      this._snackBar.open('Note pinned', 'Ok', { duration: 4000 });
      this.pin = true;
      this.isPinned = true;
    }
    if(!this.unpin) {
      this._snackBar.open('Note unpinned', 'Ok', { duration: 4000});
      this.unpin = true;
      this.isPinned = false;
    }
  },
  error => {
    console.log(error);
    this._snackBar.open('Error....', 'Ok', { duration: 4000});
  });
}

}
