import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
      selector: 'app-menu',
      templateUrl: './menu.page.html',
      styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

      pages = [
            {
                  title: 'Master List',
                  url: '/menu/master-list'
            },
            // {
            //       title: 'Second Page',
            //       url: '/menu/second'
            // }
      ];

      selectedPath = '';

      constructor(private router: Router, private ApiCallService: APICallService, private loadingCtrl: LoadingController, private menu: MenuController) {
            this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
            })
      }

      ngOnInit() {
            this.loadData();
      }

      async loadData() {
            const loading = await this.loadingCtrl.create({
                  message: 'Loading..',
                  spinner: 'bubbles',
            });

            await loading.present();

            this.ApiCallService.getCategories().subscribe((res) => {

                  loading.dismiss();

                  const categories = Object.keys(res);

                  categories.map((item, index) => {
                        // console.log(item);

                        this.pages.push({
                              title: `${item}`,
                              url: `/menu/${item}`
                        })

                  })

                  // this.pages = [...this.pages, ...categories];
                  // console.log(res);
                  console.log('categories');
                  console.log(this.pages);
            });
      }

}
