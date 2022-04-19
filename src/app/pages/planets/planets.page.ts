import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets = [];

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

    this.ApiCallService.getCategoryItems('planets').subscribe((res) => {

      loading.dismiss();

      this.planets = [...this.planets, ...res.results];
      // console.log(`Data:${this.people[0].title}`);
      console.log(res.results);
    });
  }
}
