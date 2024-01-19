import { Component } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent {
  favLinks = ["https://www.gamestop.com/", "https://store.steampowered.com/"]
}
