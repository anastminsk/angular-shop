import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  flag: boolean = false;

  changeMenClothesDisplayed() {
    document.getElementById('clothes-men-block').classList.toggle('hidden');
  }

  changeWomenClothesDisplayed() {
    document.getElementById('clothes-women-block').classList.toggle('hidden');
  }

  seeAllProducts() {
    if (document.getElementById('clothes-men-block').classList.contains('hidden')) {
      document.getElementById('clothes-men-block').classList.remove('hidden');
      this.flag = true;
    }

    if (document.getElementById('clothes-women-block').classList.contains('hidden')) { 
      document.getElementById('clothes-women-block').classList.remove('hidden');
      this.flag = true;
    }  
  }
}
