import { Component, OnInit } from '@angular/core';
import {NoteserviceService} from '../../services/note-service.service'
import { MatDialog, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {



  constructor(private noteService: NoteserviceService, private snackbar: MatSnackBar) { }
  private expand: any = false;
  listNotes: [];


  ngOnInit() {
    this.getAllNotes();

  }
  getAllNotes() {
    this.noteService.getNote().subscribe((response: any) => {
      this.listNotes = response.obj;
      console.log(response.obj);
    });

  }
    openPopup(note: any) {
   // const dialogRef = this.dialog.open(EditnoteComponent, {
      data: note
    }
  




}
