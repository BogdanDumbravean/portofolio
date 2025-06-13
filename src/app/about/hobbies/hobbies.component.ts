import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  toggle(element: HTMLElement) {
    element.classList.toggle('hidden');
    
    // Change the toggle icon
    const button = element.previousElementSibling as HTMLButtonElement;
    const icon = button.querySelector('.toggle-icon');
    
    if (icon) {
      if (element.classList.contains('hidden')) {
        icon.textContent = '+';
      } else {
        icon.textContent = '-';
      }
    }
  }
}