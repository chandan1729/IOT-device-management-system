import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../../theme';

@Injectable()
export class LineChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
      dataProvider: [
        

        { date: new Date(2017, 1), value: 30, value0: 12},
        { date: new Date(2017, 2), value: 18, value0: 5},
        { date: new Date(2017, 3), value: 10, value0: 3},
        { date: new Date(2017, 4), value: 25, value0: 4},
        { date: new Date(2017, 5), value: 21, value0: 1},
        { date: new Date(2017, 6), value: 65, value0: 4},
        { date: new Date(2017, 7), value: 11, value0: 8},
        { date: new Date(2017, 8), value: 17, value0: 10},
        { date: new Date(2017, 9), value: 26, value0: 15},
        { date: new Date(2017, 10), value: 14, value0: 1},
        { date: new Date(2017, 11), value: 35, value0: 21},
        { date: new Date(2017, 12), value: 54, value0: 13}
      
      ],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
