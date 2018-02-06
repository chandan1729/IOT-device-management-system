import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './user';

@Injectable()
export class UserSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<User[]> {
    return this.http
      .get(`app/users/?name=${term}`)
      .map((r: Response) => r.json().data as User[])
  }
}