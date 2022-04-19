import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people = [];

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

    this.ApiCallService.getRESTAPIData().subscribe((res) => {

      loading.dismiss();

      this.people = [...this.people, ...res.results];
      // console.log(`Data:${this.people[0].title}`);
      console.log(res.results);
    });
  }
}
