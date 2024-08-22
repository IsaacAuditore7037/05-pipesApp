import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'isaac';
  public nameUpper: string = 'ISAAC';
  public fullName: string = 'IsAaC';

  public customDate: Date = new Date();
}
