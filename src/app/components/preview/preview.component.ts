
import { TopicService } from '../../services/topic.service';
import { Component, OnInit } from '@angular/core';
import { PublishModalComponent } from '../../modals/publish-modal/publish-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(public topicService: TopicService,
              public bsModalRef: BsModalRef,
              private modalService: BsModalService) { }

  ngOnInit() {
  }
  publish() {
    this.topicService.addTopic(this.topicService.topicFormData).subscribe(response => {
      if (response.success) {
        this.openPublishModal();
      }
    });
  }
  openPublishModal() {
    this.modalService.show(PublishModalComponent, this.topicService.config );
  }
}
