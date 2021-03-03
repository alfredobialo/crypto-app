import {Directive, ElementRef, Renderer2, OnInit} from '@angular/core';
@Directive({selector: '[am-file-upload]'})
export class AmFileUploadDirective implements OnInit{
  constructor(private elem : ElementRef,  private renderer: Renderer2) {
  }

  ngOnInit(){
    const fileElem = this.renderer.createElement("input");
    //const content = this.renderer.createText("Renderer 2 in Action");
    //this.renderer.appendChild(fileElem,content);
    this.renderer.setAttribute(fileElem, "type", "file");
    this.renderer.setAttribute(fileElem, "multiple", '');
    //this.renderer.setAttribute(fileElem, "enctype", "multipart-urlencoded");
    //this.renderer.addClass(fileElem, "form-control-file form-control");
    this.renderer.appendChild(this.elem.nativeElement, fileElem);
  }
}
