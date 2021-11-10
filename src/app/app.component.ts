import { Component, VERSION } from '@angular/core';

interface Language {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  languages: Language[] =[];
  selectedLanguage=3;

  constructor(){
    this.languages = [
      {id: 1, name: "Angular"},
      {id: 2, name: "Typescript"},
      {id: 3, name: "Javascript"},
      {id: 4, name: "Java"},
      {id: 5, name: "DotNet"}
    ];


  }

  onAddLanguage(){
    console.log('~ onAddLanguage');
    const l: Language = {id: 6, name: "Python"}
    this.languages.push(l);
    this.selectedLanguage=6;
    console.log(this.languages)
  }

}
