import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClothesItem } from '../main/clothes/clothes.model';
import { ClothesDataService } from '../main/clothes/clothes-data.service';

@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.css']
})

export class ClothesDetailComponent implements OnInit {
  clothesItems: ClothesItem[];
  private clothesId: string;

  constructor(private route: ActivatedRoute, private clothesDataService: ClothesDataService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => this.clothesId = params['id']);
    this.clothesItems = this.clothesDataService.getClothes();
  }
}
