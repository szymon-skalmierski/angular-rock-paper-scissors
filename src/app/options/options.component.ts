import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  decision: 'rock' | 'paper' | 'scissors' | null = null;

  constructor() { }

  ngOnInit(): void {}

  makeDecision(decision: 'rock' | 'paper' | 'scissors') {
    this.decision = this.decision ? null : decision;
  }

}
