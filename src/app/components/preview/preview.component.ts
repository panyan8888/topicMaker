
import { TopicService } from '../../services/topic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(public topicService: TopicService) { }

  ngOnInit() {
  }
  publish() {
    this.topicService.addTopic(this.topicService.topicFormData).subscribe(response => {
      console.log(response);
    });
  }
}
