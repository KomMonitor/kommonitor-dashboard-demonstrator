import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

  constructor(
    @Inject('WIDGET_DATA') public data: any
  ) {console.log(data)}
}
