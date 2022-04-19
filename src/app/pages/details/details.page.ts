import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  person_id = null;
  person = null;

  constructor(private route: ActivatedRoute, private APIDetails: APICallService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.person_id = id;

    console.log(`For id: ${id}`);

    this.APIDetails.getDetails(id).subscribe(res => {
      console.log(res)
      this.person = res;
    })
  }
}
