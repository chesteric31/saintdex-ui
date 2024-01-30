import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {DataProviderService} from "../data-provider.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private dataProviderService: DataProviderService) {
  }

  onSearchUpdated(value: string) {
    this.dataProviderService.filter(value);
  }
}
