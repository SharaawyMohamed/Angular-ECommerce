import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardstyle]',
  standalone: true
})
export class CardstyleDirective {
  private readonly cardDesing:ElementRef;
  private readonly navbarAddtirubes;
  constructor(_cardDesign:ElementRef, _navbarAttributes:ElementRef)
  {
    //this.cardDesing.nativeElement.style.border='2px solid blue'
    this.cardDesing=_cardDesign;
    this.navbarAddtirubes=_navbarAttributes;
  }
  @HostListener('mouseover') mouseOver(){
    //this.cardDesing.nativeElement.style.border='2px solid #DC86F4'
    //this.cardDesing.nativeElement.style.border='2px solid #DC86F4'

    this.cardDesing.nativeElement.style.boxShadow='rgba(0, 0, 0, 0.35) 0px 4px 10px ';
    this.navbarAddtirubes.nativeElement.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 4px 10px';
  }
  @HostListener('mouseout') mouseOut(){
   // this.cardDesing.nativeElement.style.boxShadow='2px solid #CDD8DD'
   this.cardDesing.nativeElement.style.boxShadow='rgba(0, 0, 0, 0.27) 0px 2px 8px ';
   this.navbarAddtirubes.nativeElement.style.boxShadow = 'rgba(0, 0, 0, 0) 0px 0px 0px';
  }

}
