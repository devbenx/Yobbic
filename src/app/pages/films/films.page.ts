import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films = [];

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

    this.ApiCallService.getCategoryItems('films').subscribe((res) => {

      loading.dismiss();

      this.films = [...this.films, ...res.results];
      console.log('films');
      console.log(res.results);
    });
  }
}
