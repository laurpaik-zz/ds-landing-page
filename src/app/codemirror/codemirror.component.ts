import { Component, OnInit } from '@angular/core';
import { CodemirrorModule } from 'ng2-codemirror';

@Component({
  selector: 'text-editor',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent implements OnInit {
  public starterCode;
  code = `\/\/\ Type \`start\` to begin.`;
  config = {
    mode: 'shell',
    lineWrapping: false,
    lineNumbers: true,
    theme: 'vibrant-ink'
  };
  ngOnInit() {
    this.starterCode = this.code;
  }
  onRun() {
    if (this.code.includes('start')) {
      console.log(this.starterCode);
      this.code = 'testing';
    }
    else {
      console.log('RUN');
    }
  }
  onClear () {
    console.log('CLEAR');
    this.code = '';
  }
}
