
import { TopicService } from '../../services/topic.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(public topicService: TopicService,
              private router: Router) { }

  ngOnInit() {
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
        this.topicService.topicData.file = reader.result;
      };
    }
    if (this.topicService.topicFormData.has('file')) {
      this.topicService.topicFormData.delete('file');
    }
    this.topicService.topicFormData.append('file', $event.target.files[0]);
  }
}
