import { Component } from '@angular/core';
import { TitleService } from './services/title/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-advance';


  constructor(
    private titleService: TitleService
  ) {

  }


  ngOnInit(): void {

    //this.titleService.setTitleOldVersion(); // antes de la version 14 
    

  }

}
