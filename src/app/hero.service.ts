import { Injectable } from '@angular/core';
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  xmltojson(resp:any,tag:any){
    return $.cordys.json.findObjects(resp,tag)
  }
  ajax(method: any,namespace: any,parameters:any){
    return new Promise((rev, rej) => {
      $.cordys.ajax({
        method: method,
        namespace: namespace,
        dataType: '* json',
        parameters: parameters,
        success: function success(resp: any) {
          rev(resp);
        },
        error: function error(e1: any, e2: any, e3: any) {
          rej([e1, e2, e3]);
        },
      });
    });
  }
  }

