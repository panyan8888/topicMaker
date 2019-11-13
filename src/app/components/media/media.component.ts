
import { TopicService } from '../../services/topic.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  imageURL: any;

  constructor(public topicService: TopicService,
              private router: Router) { }

  ngOnInit() {
    this.imageURL = 'http://placehold.it/180';
  }
  continue() {
    if (this.topicService.topicFormData.has('file')) {
      this.router.navigateByUrl('preview');
    }
  }

  onFileInputChange($event: any): void {
    if ($event.target.value) {
      const reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]);
      reader.onload = () => {
        console.log(this.imageURL);
        console.log(reader.result);
        this.imageURL = reader.result;
        this.topicService.topicData.file = reader.result;
      };
    }
    if (this.topicService.topicFormData.has('file')) {
      this.topicService.topicFormData.delete('file');
    }
    this.topicService.topicFormData.append('file', $event.target.files[0]);
  }
}
