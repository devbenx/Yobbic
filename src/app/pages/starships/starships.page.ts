import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starships = [];

  constructor(private ApiCallService: APICallService, private loadingCtrl: LoadingController, private menu: MenuController) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });

    await loading.present();

    this.ApiCallService.getCategoryItems('starships').subscribe((res) => {

      loading.dismiss();

      this.starships = [...this.starships, ...res.results];
      console.log('starships');
      console.log(res.results);
    });
  }
}
