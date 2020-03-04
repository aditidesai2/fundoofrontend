import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private router: Router,
    private snackBar: MatSnackBar) { }
  card = false;
  title = new FormControl(null, Validators.required)
  description = new FormControl(null, Validators.required)

  ngOnInit() {

  }
  cardSwap1() {

    this.card = !this.card;
    console.log(this.card);
  }
  cardSwap() {
    let note = { title: this.title.value, description: this.description.value }
    if (!this.title.value && !this.description.value) {
      this.card = !this.card;
      console.log(this.card);
    } error => {
      console.log("error", error);
      this.snackBar.open("failed to add note", "ok", { duration: 5000 })
    }
  }

}
