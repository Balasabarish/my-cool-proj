import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
  cars = ['ford','hyndai','chrevolet'];
  mydata() {
   return 'This is my data,Man!';
  }
}
