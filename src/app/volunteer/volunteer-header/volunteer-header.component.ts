import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-header',
  templateUrl: './volunteer-header.component.html',
  styleUrls: ['./volunteer-header.component.css']
})
export class VolunteerHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnDelete(){
    window.sessionStorage.clear();
  }
}
