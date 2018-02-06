import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: '6 new devices to be added. Refer to the email'},
    { text: 'Provide access to new Fall batch students. Refer to the email' },
    { text: 'Maintainance issues: Xerox Machine at Javits 1st Floor. Contact personnel from Cannon' },
    { text: 'Recruitment task: Screen resumes for hiring assistants for additional admin tasks' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
