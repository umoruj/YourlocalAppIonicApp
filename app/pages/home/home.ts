import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {DetailsPage} from '../details/details';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [PeopleService]
})
export class HomePage {
  public people: any;
  detailsPage = DetailsPage;

  constructor(public peopleService: PeopleService) {
    this.loadPeople();
  }
  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }
}
