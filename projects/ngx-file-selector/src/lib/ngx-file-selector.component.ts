import { Component, OnInit, ElementRef, Input, Optional, HostBinding, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'ngx-file-selector',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class NgxFileSelectorComponent implements OnInit, ControlValueAccessor {
  private input: HTMLInputElement;

  @Input()
  accpet = 'file/*';
  @Input()
  multiple: boolean;
  @Input()
  isDisabled: boolean;

  @HostBinding('tabIndex')
  tabIndex = 0;

  @Output()
  select = new EventEmitter<FileList>();

  value: FileList;

  changeFn = (files: FileList) => { };

  touchFn = () => { };

  ngOnInit() {
    const selector = this.elementRef.nativeElement as HTMLElement;
    selector.style.position = 'relative';
    selector.style.display = 'inline-block';
    selector.style.overflow = 'hidden';

    this.input = document.createElement('input');
    this.input.type = 'file';
    this.input.style.top = '0';
    this.input.style.bottom = '0';
    this.input.style.left = '0';
    this.input.style.right = '0';
    this.input.style.display = 'block';
    this.input.style.position = 'absolute';
    this.input.style.zIndex = '1';
    this.input.style.opacity = '0';
    this.input.style.width = '100%';
    this.input.accept = this.accpet;
    this.input.multiple = this.multiple;
    this.input.disabled = this.isDisabled;

    fromEvent(this.input, 'change').subscribe(event => {
      this.input.remove();
      this.changeFn(this.input.files);
      this.touchFn();
      this.select.emit(this.input.files);
      this.ngOnInit();
      const elementEl = this.elementRef.nativeElement as HTMLElement;
      elementEl.focus();
    });
    selector.appendChild(this.input);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.input.disabled = isDisabled;
  }

  constructor(
    private elementRef: ElementRef,
    @Optional()
    ngControl: NgControl
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

}
