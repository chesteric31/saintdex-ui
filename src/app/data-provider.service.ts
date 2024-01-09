import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Armor} from "./saint-seiya";
import {environment} from "../environments/environment";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  allArmorsSignal: Signal<Armor[]>;
  constructor(private httpClient: HttpClient) {
    const params = new HttpParams().set('scaleHeight', '185').set('scaleWidth', '185');
    const url = environment.apiUrl + 'v2/armors/';
    this.allArmorsSignal = toSignal(this.httpClient.get<Armor[]>(url, { params }), {initialValue: []});
  }

}
