import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClothesItem } from '../../clothes/clothes.model';
import { ClothesDataService } from '../../clothes/clothes-data.service';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class NgbdDropdown implements OnInit { 

  @Input() clothesItems: ClothesItem[];
  @Output() changeClothesItems: EventEmitter<ClothesItem[]> = new EventEmitter<ClothesItem[]>();

  constructor(private clothesDataService: ClothesDataService) { }

  ngOnInit() {
    this.clothesItems = this.clothesDataService.getClothes();
  }

  compareByPrice(a, b) {
    return a.price - b.price;
  }

  compareByName(a, b) {
    return a.name.charCodeAt(0) - b.name.charCodeAt(0);
  }

  sortByPrice() {
    this.changeClothesItems.emit(this.clothesItems.sort(this.compareByPrice));
  }

  sortByName() {
    this.changeClothesItems.emit(this.clothesItems.sort(this.compareByName));
  }
}
