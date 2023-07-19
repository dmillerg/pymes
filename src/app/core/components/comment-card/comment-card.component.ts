import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Comentario } from '../../models/comentarios.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class CommentCardComponent {
@Input() comentario!: Comentario;
}
