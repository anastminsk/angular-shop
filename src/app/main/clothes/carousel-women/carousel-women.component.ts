import { Component, OnInit } from '@angular/core';
import { ClothesItem } from '../clothes.model';
import { ClothesDataService } from '../clothes-data.service';

@Component({
  selector: 'ngbd-carousel-women',
  templateUrl: './carousel-women.component.html',
  styleUrls: ['./carousel-women.component.css']
})

export class NgbdCarouselWomen implements OnInit {
  clothesItems: ClothesItem[];
  clothesItemsWomen: ClothesItem[];

  images = [1, 2, 3, 4, 5].map(() => `../../assets/img/white-bg.png`);

  constructor(private clothesDataService: ClothesDataService) { }

  ngOnInit() {
    this.clothesItems = this.clothesDataService.getClothes();
    this.clothesItemsWomen = this.clothesItems.filter(clothesItem => clothesItem.gender === "women");
  }

  onChange(event) {
    this.clothesItems = event;
    this.clothesItemsWomen = this.clothesItems.filter(clothesItem => clothesItem.gender === "women");
  }
}
