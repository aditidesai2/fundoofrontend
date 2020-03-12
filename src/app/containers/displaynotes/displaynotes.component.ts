import { Component, OnInit } from '@angular/core';
import {NoteserviceService} from '../../services/note-service.service'
import {MatSnackBar} from '@angular/material';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Note } from 'src/app/model/note.model';




@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _noteService: NoteserviceService

  ) {}

  
  private expand: any = false;
  notes:Note [];


  ngOnInit() {
    this.getAllNotes();
          console.log("response ++on in it++",this.notes);


  }
  getAllNotes() {
    console.log('get note called');
    this._noteService.getNote().subscribe((response: any) => {
      this.notes = response.notes;
      console.log("response ++++",response);
      console.log("all the notes in list notes",this.notes);
      console.log("value" , this.notes.toString);
      
      
    });

  }
    openPopup(note: any) {
   // const dialogRef = this.dialog.open(EditnoteComponent, {
      data: note
    }
}
