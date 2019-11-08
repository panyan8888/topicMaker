
import { TopicService } from '../../services/topic.service';
import ICategoryModel from '../../models/ICategoryModel';

import {} from 'googlemaps';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-location-category',
  templateUrl: './location-category.component.html',
  styleUrls: ['./location-category.component.scss']
})
export class LocationCategoryComponent implements OnInit, OnDestroy {
  @ViewChild('map', null) mapElement: any;
  hasFrontErrors = false;
  map: google.maps.Map;
  geocoder: google.maps.Geocoder;
  private subscriptions: Array<Subscription> = [];
  public categories: Array<ICategoryModel> = [];
  public selectedCategoryId?: number;
  constructor(public topicService: TopicService,
              private router: Router) { }

  ngOnInit() {
    this.subscriptions.push(
    this.topicService.getCategories().subscribe(response => {
      if (response && response.success && response.data) {
        this.categories = response.data;
        this.categories.unshift({name: 'Select Category', id: null});
      }
    }));
    this.initMap();
  }

  initMap() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.geocoder = new google.maps.Geocoder();
  }

  selectCategory(categoryId: any): void {
    if (this.topicService.topicFormData.has('categoryId')) {
      this.topicService.topicFormData.delete('categoryId');
    }
    if (categoryId) {
      this.topicService.topicFormData.append('categoryId', categoryId);
    }
  }

  continue() {
    if (this.topicService.topicFormData.has('lat')) {
      this.topicService.topicFormData.delete('lat');
    }
    if (this.topicService.topicFormData.has('lng')) {
      this.topicService.topicFormData.delete('lng');
    }
    if (this.topicService.topicFormData.has('address')) {
      this.topicService.topicFormData.delete('address');
    }
    this.topicService.topicFormData.append('lat', this.map.getCenter().lat().toString());
    this.topicService.topicFormData.append('lng', this.map.getCenter().lng().toString());
    this.topicService.topicFormData.append('address', this.map.getCenter().toString());

    // validation
    if (this.topicService.topicFormData.has('lat') && this.topicService.topicFormData.has('lng') &&
      this.topicService.topicFormData.has('address') && this.topicService.topicFormData.has('categoryId')) {
      this.router.navigateByUrl('topic-content');
    } else {
      this.hasFrontErrors = true;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }
}
