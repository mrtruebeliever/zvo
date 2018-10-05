import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'zvo-genesis';
  data = {
    'Apple': null,
    'Microsoft': null,
    'Google': null
  };


  // autocomplete
  autocompleteOptions: Materialize.AutoCompleteOptions = {
    data: {
      'Apple': null,
      'Microsoft': null,
      'Google': 'assets/google_g_logo.png',
    },
  };

  ngOnInit(){

  }
}
