import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { APICallService, PlanetDetails } from 'src/app/services/apicall.service';

interface Person {
      id: number,
      name: string,
      gender: string,
      birth_year: string,
}

@Component({
      selector: 'app-master-list',
      templateUrl: './master-list.page.html',
      styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {

      people: Person[] = [];
      peoplePrincipalFilm = [];
      personOrigin: string[] = [];

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

            await this.ApiCallService.getRESTAPIData()
                  .subscribe(
                        (res) => {

                              loading.dismiss();

                              res.results.map((item, index) => {

                                    this.ApiCallService.getPlanetDetails(`${item.homeworld}`)
                                          .subscribe(
                                                (res) => {
                                                      this.personOrigin.push(res.name);
                                                });

                                    this.ApiCallService.getFilmDetails(`${item.films[0]}`)
                                          .subscribe(
                                                (res) => {
                                                      this.peoplePrincipalFilm.push({
                                                            title: res.title,
                                                            description: res.opening_crawl
                                                      });
                                                });

                                    this.people.push({
                                          id: (index + 1),
                                          name: item.name,
                                          birth_year: item.birth_year,
                                          gender: item.gender,
                                    })

                              })
                              console.log('this.people');
                              console.log(this.people);
                        },
                        error => {
                              console.log("PUT call in error", error);
                        },
                        () => {
                              console.log('Completed');
                              console.log(this.personOrigin);
                              console.log(this.peoplePrincipalFilm);
                        }
                  );


      }
}
