import {Component, HostListener} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DataProviderService} from "../data-provider.service";
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgForOf,
    HttpClientModule,
    MatGridListModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(public dataProviderService: DataProviderService) {
  }

  myBreakpoint = 6;

  ngOnInit() {
    this.handleWidth(window.innerWidth);
  }

  private handleWidth(innerWidth: number) {
    if (innerWidth > 1500) {
      this.myBreakpoint = 6;
    } else {
      if (innerWidth > 1300) {
        this.myBreakpoint = 5;
      } else {
        if (innerWidth > 1100) {
          this.myBreakpoint = 4;
        } else {
          if (innerWidth > 900) {
            this.myBreakpoint = 3;
          } else {
            if (innerWidth > 700) {
              this.myBreakpoint = 2;
            } else {
              this.myBreakpoint = 1;
            }
          }
        }
      }
    }

  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.handleWidth(event.target.innerWidth);
  }
}
