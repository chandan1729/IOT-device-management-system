import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'New Devices',
        stats: '200',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'New users',
        stats: '745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '391',
        icon: 'face',
      }, {
        color: pieColor,
        description: ' ',
        stats: ' ',
        icon: 'refresh',
      }
    ];
  }
}
