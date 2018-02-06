import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-12-07',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'Hiring event',
          start: '2017-12-14',
          color: dashboardColors.silverTree
        },
        {
          title: 'Maintainence',
          start: '2017-12-12',
          end: '2017-12-12',
          color: dashboardColors.blueStone
        },
        {
          title: 'Christmas Dinner at SAC',
          start: '2017-12-25T20:00:00',
          color: dashboardColors.surfieGreen
        },
        
      ]
    };
  }
}
