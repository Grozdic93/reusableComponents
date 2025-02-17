import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
@Input({required:true}) link!: string;
@Input() linkTarget?:string
}
