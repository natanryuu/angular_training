import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InTheBox]',
  standalone: true
})
export class InTheBoxDirective {

  // lab06 -- part1
  constructor(private el: ElementRef) {
    // this.putInTheBox("solid 2px red");
   }

   private putInTheBox(borderStyle: string) {
    this.el.nativeElement.style.border = borderStyle;
  }

  // lab06 -- part2
  // 將constructor中的this.putInTheBox("solid 2px red");註解掉

  @Input() borderStyle: string = "";
  @HostListener('mouseenter') onMouseEnter() {
    this.putInTheBox(this.borderStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.putInTheBox('none');
  }

  ngOnInit() {
    if (!this.borderStyle) {
      this.borderStyle = "solid 2px red";
    } 
  }
}
