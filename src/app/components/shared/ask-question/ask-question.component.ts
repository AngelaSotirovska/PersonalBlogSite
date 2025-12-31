import { Component, inject } from '@angular/core';
import { AppService } from '../../../app.service';
import { ContactInfo } from '../../../app.models';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrl: './ask-question.component.scss',
})
export class AskQuestionComponent {
  private readonly appService = inject(AppService);

  protected readonly contactInfos = this.appService.requestObject<ContactInfo>(
    'assets/data/contact-info.json',
  );
}
