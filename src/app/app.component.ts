import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private readonly sanitizer = inject(DomSanitizer);

  @ViewChild('iframe') iframe: ElementRef | undefined;

  ngAfterViewInit() {
    this.iframe?.nativeElement.setAttribute(
      'src',
      // this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://localhost:3000/iframe'
      // )
    );
  }

  onLoad(iframe: any) {
    const iframeWindow = this.iframe?.nativeElement.contentWindow;
    iframeWindow.postMessage('HOLA QUE ASE', '*');
  }
}
