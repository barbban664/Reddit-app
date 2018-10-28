import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  name: string;
  link: string;
  namesList: Array<string> = [];
  linksList: Array<string> = [];
  rateList: Array<any> = [];


  constructor() { }

  ngOnInit() {

  }
  add() {
    this.namesList.push(this.name);
    this.linksList.push(this.link);
    this.rateList.push({number:0});
    this.name = '';
    this.link = '';
  }

  plus(rate) {
    // this.rateList.forEach(element => {
      rate.number++;
    // });
  }

  minus(rate) {
      rate.number--;
  }
}


