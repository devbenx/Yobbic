import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  vehicles = [];

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

    this.ApiCallService.getCategoryItems('vehicles').subscribe((res) => {

      loading.dismiss();

      this.vehicles = [...this.vehicles, ...res.results];
      // console.log(`Data:${this.people[0].title}`);
      console.log(res.results);
    });
  }
}
