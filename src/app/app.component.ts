import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-file-selector';

  installCode = `npm i ngx-file-selector`;

  files: FileList;

  useCode = `
  <ngx-file-selector>
    <a>选择文件</a>
  </ngx-file-selector>
  `;
}
