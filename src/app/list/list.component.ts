import {Component, HostListener, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DataProviderService} from "../data-provider.service";
import {NgClass, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {Armor} from "../saint-seiya";
import {MatDialog} from "@angular/material/dialog";
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgForOf,
    HttpClientModule,
    MatGridListModule,
    MatBadgeModule,
    MatChipsModule,
    NgClass
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  myBreakpoint = 6;

  constructor(public dataProviderService: DataProviderService,
              private dialog: MatDialog) {
  }

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

  openDetail(armor: Armor) {
    this.dialog.open(DetailComponent, {
      data: {
        armor: armor
      }
    });
  }
}
