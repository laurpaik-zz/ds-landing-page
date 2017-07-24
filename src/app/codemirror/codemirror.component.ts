import { Component } from '@angular/core';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'text-editor',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent {
  code = `heyhey`;
  config = {
    mode: 'javascript',
    lineWrapping: false,
    lineNumbers: true,
    theme: 'monokai'
  };
}
