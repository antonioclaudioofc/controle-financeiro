import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isHandset!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, '(max-width: 600px)'])
      .subscribe((result) => {
        this.isHandset =
          result.breakpoints[Breakpoints.Handset] || result.matches;
      });
  }
}
