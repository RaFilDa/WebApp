import { Component, HostBinding } from '@angular/core';
import { StylesheetMap } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RaFilDa';
  
  @HostBinding('class') className = '';
  $Dark_mode = false;

  toggleControl = new FormControl(false);

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? 'dark-theme' : '';
      if(this.$Dark_mode == false) {
        document.getElementById('body')?.setAttribute('background-color: beige', 'background-color: gray')
        this.$Dark_mode = true
      }
      else {
        this.$Dark_mode = false
      }
    });
    }
  }
