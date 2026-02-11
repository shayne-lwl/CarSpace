import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  inject,
  Renderer2,
  RendererFactory2,
  OnInit,
  signal,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeToggleService implements OnInit {
  /* Renderer2 acts as know how to handle DOM manipulations on client and server side, unlike element.classList.add/remove which only manipulates DOM on client side
   RendererFactory2 creates Renderer2 instances */
  private _rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private _renderer: Renderer2 = this._rendererFactory.createRenderer(
    null,
    null,
  );
  private _document: Document = inject(DOCUMENT);
  private _root: HTMLElement = this._document.documentElement;

  private _theme = signal<'light' | 'dark'>('light');
  readonly theme = this._theme.asReadonly();

  ngOnInit(): void {}

  toggle(): void {
    this._theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    if (this._theme() === 'light') {
      this._renderer.removeClass(this._root, 'dark');
      this._renderer.addClass(this._root, 'light');
    } else {
      this._renderer.removeClass(this._root, 'light');
      this._renderer.addClass(this._root, 'dark');
    }
  }
}
