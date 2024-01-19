import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://m.media-amazon.com/images/I/81KGsbq8ekL._AC_UF1000,1000_QL80_.jpg';
  image2 = 'https://www.impericon.com/432x624x90/media/catalog/product/p/p/pp35325_e4a6d2c6-bd24-44e1-b988-38e1031700e2.jpg';
  image3 = 'https://cdn.vox-cdn.com/thumbor/1jaotrFmU5EcSqS18_AAVWEwgwA=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/24380016/Legend_of_Zelda_Ocarina_of_Time_official_art.png';

  constructor() { }

  ngOnInit() {
  }
}
