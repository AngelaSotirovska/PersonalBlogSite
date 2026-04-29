import { Component, inject } from '@angular/core';
import { Accordion } from 'primeng/accordion';
import { AskQuestionComponent } from '../shared/ask-question/ask-question.component';
import { Button } from 'primeng/button';
import { CardComponent } from '../shared/card/card.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { FancyCardComponent } from '../shared/fancy-card/fancy-card.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { QuestionAnswerComponent } from '../shared/question-answer/question-answer.component';
import { TeaserComponent } from '../shared/teaser/teaser.component';
import { AppService } from '../../app.service';
import { ContactInfo, DisplayItem, QuestionAnswer } from '../../app.models';

@Component({
  selector: 'app-main-page',
  imports: [
    Accordion,
    AskQuestionComponent,
    Button,
    CardComponent,
    CarouselComponent,
    FancyCardComponent,
    FooterComponent,
    HeaderComponent,
    NgOptimizedImage,
    QuestionAnswerComponent,
    TeaserComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  private readonly appService = inject(AppService);

  protected readonly intro = this.appService.requestObject<any>(
    'assets/data/texts.json',
  );

  protected readonly about = this.appService.requestObject<any>(
    'assets/data/about.json',
  );

  protected readonly titles = this.appService.requestObject<any>(
    'assets/data/titles.json',
  );

  protected readonly contactInfos = this.appService.requestObject<ContactInfo>(
    'assets/data/contact-info.json',
  );

  protected readonly formatsInteraction =
    this.appService.requestArray<DisplayItem>(
      'assets/data/formats-interactions.json',
    );

  protected readonly topicsAbout = this.appService.requestArray<string>(
    'assets/data/topics-about.json',
  );

  protected readonly services = this.appService.requestArray<DisplayItem>(
    'assets/data/services.json',
  );

  protected readonly questionsAnswers =
    this.appService.requestArray<QuestionAnswer>(
      'assets/data/questions-answers.json',
    );

  protected readonly diplomaImages = [
    'assets/images/1 - diploma.webp',
    'assets/images/2 - diploma.webp',
    'assets/images/3 - diploma.webp',
    'assets/images/4 - diploma.webp',
    'assets/images/5 - diploma.webp',
  ];

  protected readonly window = window;
}
