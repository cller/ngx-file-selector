# 安装依赖
```
  npm i ngx-file-selector
```

# 使用方法
```typscript
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      NgxFileSelectorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```
``` html
  <ngx-file-selector>
    <a>选择文件</a>
  </ngx-file-selector>
```

# 接口说明

## NgxFileSelectorComponent
### [@input]accpet: string  选择文件接受类型
### [@Input]multiple: boolean 是否多选,默认单选
###  [@Output]select: EventEmitter<FileList> 选择文件通知
