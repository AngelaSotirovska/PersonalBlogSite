import { Component, input } from '@angular/core';
import {
  AccordionContent,
  AccordionHeader,
  AccordionPanel,
} from 'primeng/accordion';

@Component({
  selector: 'app-question-answer',
  imports: [AccordionContent, AccordionPanel, AccordionHeader],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss',
})
export class QuestionAnswerComponent {
  questionNumber = input.required<number>();
  question = input.required<string>();
  answer = input<any>();
}
