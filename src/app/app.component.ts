import { Component, OnInit } from '@angular/core';
// import {JSONPlaceholderService} from '../services/jsonplaceholder.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  // constructor(private JSONPlaceholder: JSONPlaceholderService) {
  //   this.task = new Array<any>()
  //  }

//   getDataFromAPI() {
//     this.JSONPlaceholder.getData().subscribe((task) => {
//       console.log(task)
//       this.task = task
//     })
//   }

}
