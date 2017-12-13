import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StaticInfoService {

  public modules: any[] = [];
  public info: any = {};

  constructor(public http: Http) {
    this.http.get('assets/data/info-app.json').
      subscribe(data => {
        this.info = data.json();
        if (this.info.modules) {
          this.modules = this.info.modules;
        }
    });
  }
}
