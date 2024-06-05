import {Component, Input} from '@angular/core';
import {Location} from "@angular/common";
import {Status} from "../../model/casestatus.model";

@Component({
  selector: 'app-opencasepage',
  templateUrl: './opencasepage.component.html',
  styleUrls: ['./opencasepage.component.css']
})
export class OpencasepageComponent {
  constructor(private location: Location) {
  }

  @Input() status: Status = Status.Offen;
  @Input() area = 'Medizinrecht';
  cancel() {
    this.status = Status.Storniert;
  }

  accept() {
    this.status = Status.InBearbeitung;
  }

  back(): void {
    this.location.back()
  }
}
