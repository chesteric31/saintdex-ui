import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {DetailData} from "../detail-data";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButtonModule,
    MatDialogActions,
    MatInputModule,
    MatListModule,
    MatCardModule,
    NgForOf,
    MatIconModule,
    NgIf,
    NgClass
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  selectedIndex = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public detailData: DetailData) {
  }

  next() {
    this.selectedIndex++;
  }

  previous() {
    this.selectedIndex--;
  }
}
