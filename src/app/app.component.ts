import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public loginService: LoginService,
              public router: Router) {}

  title = 'topic-maker';

  ngOnInit(): void {
  }

  checkPagePosition(routeName: string): boolean {
    return this.router.url.includes(routeName);
  }
}
