import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private hs: HeroService, public router: Router) { }
  data: any = [];

  ngOnInit(): void {
  }

  login() {
    const that = this;
    console.log('data=>', that.data)

    debugger;


    $.cordys.authentication.sso.authenticate(that.data.user, that.data.pass)
      .done((resp: any) => {
        console.log("Welcome to my World");
        that.router.navigateByUrl('test');
      })
      .fail(function () {
        console.log('fail');
      })

  }


}
