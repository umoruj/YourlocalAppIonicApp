import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [PeopleService]
})
export class DetailsPage {
  public people: any;

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
