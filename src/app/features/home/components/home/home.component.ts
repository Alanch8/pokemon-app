import { Component } from "@angular/core";
import { Image } from "src/app/core/constants/images";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  news1 = Image.NEWS_1;
  pegi = Image.PEGI;
  news2 = Image.NEWS_2;
  news3 = Image.NEWS_3;
  news4 = Image.NEWS_4;
  news5 = Image.NEWS_5;
  news6 = Image.NEWS_6;
  news7 = Image.NEWS_7;
  news8 = Image.NEWS_8;
  news9 = Image.NEWS_9;
  news10 = Image.NEWS_10;
  news11 = Image.NEWS_11;
}
