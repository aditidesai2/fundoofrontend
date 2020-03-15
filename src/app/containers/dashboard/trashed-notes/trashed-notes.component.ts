import { Component, OnInit } from "@angular/core";
import { NoteserviceService } from "../../../services/note-service.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Note } from "src/app/model/note.model";

@Component({
  selector: "app-trashed-notes",
  templateUrl: "./trashed-notes.component.html",
  styleUrls: ["./trashed-notes.component.scss"]
})
export class TrashedNotesComponent implements OnInit {
  constructor(
    // private _router: Router,
    // private _snackBar: MatSnackBar,
    // private _formBuilder: FormBuilder,
    private _noteService: NoteserviceService
  ) {}

  private expand: any = false;
  notes: Note[];

  ngOnInit() {
    this._noteService.autoRefesh.subscribe(() => {
      this.getAllTrashedNotes();
    });
    this.getAllTrashedNotes();
  }
  getAllTrashedNotes() {
    console.log("get note called");
    this._noteService.getAllTrashedNotes().subscribe((response: any) => {
      this.notes = response.object;
      console.log("response ++++", response.object);
      console.log("all the notes in list notes", this.notes);
    });
  }
  openPopup(note: any) {
    // const dialogRef = this.dialog.open(EditnoteComponent, {
    data: note;
  }
}
