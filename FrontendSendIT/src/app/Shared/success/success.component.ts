import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  @Input() message!: string;
  // @Output() end = new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void { }
  // close() {
  //   this.end.emit();

  // }
}
