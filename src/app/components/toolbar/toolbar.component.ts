import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public showHamburger = false;

  ngOnInit(): void {
    this.showHamburger = window.innerWidth <= 768;
    window.onresize = () => {
      this.showHamburger = window.innerWidth <= 768;
    };
  }


}
