import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
    selector: 'user-details',
    styleUrls: ['./userdetails.scss'],
    templateUrl: './userdetails.html',
  })

export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['userid'] !== undefined) {
        const userid = +params['userid'];
        this.navigated = true;
        this.userService.getUser(userid)
            .then(user => this.user = user);
      } else {
        this.navigated = false;
        this.user = new User();
      }
    });
  }

  save(): void {
    this.userService
        .save(this.user)
        .then(user => {
          this.user = user; // saved hero, w/ id if new
          this.goBack(user);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedUser: User = null): void {
    this.close.emit(savedUser);
    if (this.navigated) { window.history.back(); }
  }
}