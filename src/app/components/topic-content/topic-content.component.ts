
import { TopicService } from '../../services/topic.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-content',
  templateUrl: './topic-content.component.html',
  styleUrls: ['./topic-content.component.scss']
})
export class TopicContentComponent implements OnInit {

  hasFrontErrors = false;

  constructor(public topicService: TopicService,
              private router: Router) { }

  public topicData = {
    title: '',
    description: '',
    amount: 0,
    approved: false
  };
  ngOnInit() {
  }
  fillTopic() {
    if (this.topicService.topicFormData.has('title')) {
      this.topicService.topicFormData.delete('title');
    }
    if (this.topicService.topicFormData.has('description')) {
      this.topicService.topicFormData.delete('description');
    }
    if (this.topicService.topicFormData.has('amount')) {
      this.topicService.topicFormData.delete('amount');
    }
    if (this.topicService.topicData.title && this.topicService.topicData.title.length > 0) {
      this.topicService.topicFormData.append('title', this.topicService.topicData.title);
    }
    if (this.topicService.topicData.description && this.topicService.topicData.description.length > 0) {
      this.topicService.topicFormData.append('description', this.topicService.topicData.description);
    }
    if (this.topicService.topicData.amount && this.topicService.topicData.amount.toString().length > 0) {
      this.topicService.topicFormData.append('amount', this.topicService.topicData.amount.toString());
    }

    if (this.topicService.topicFormData.has('amount') && this.topicService.topicFormData.has('description') &&
      this.topicService.topicFormData.has('title')) {
      this.router.navigateByUrl('media');
    } else {
      this.hasFrontErrors = true;
    }
  }
}
