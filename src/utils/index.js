import dateFormat from 'dateformat';

export const getDateFormat = date => dateFormat(date, 'dddd, mmmm dS, yyyy hTT');

export const getTomorrowFormat = dateFormat(new Date().setDate(new Date().getDate() + 1), "yyyy-mm-dd'T'HH:00");

export const getTime = time => {
  let day = 0;
  let hour = 0;
  let minute = time;

  if (time > 59) {
    hour = Math.floor(time / 60);
    minute = time % 60;
  }

  if (hour > 23) {
    day = Math.floor(hour / 24);
    hour = hour % 24;
  }

  if (day) {
    if (hour) {
      if (minute) {
        return `${day} days ${hour} hours ${minute} minutes`;
      } else {
        return `${day} days ${hour} hours`;
      }
    } else {
      if (minute) {
        return `${day} days ${minute} minutes`;
      } else {
        return `${day} days`;
      }
    }
  } else {
    if (hour) {
      if (minute) {
        return `${hour} hours ${minute} minutes`;
      } else {
        return `${hour} hours`;
      }
    } else {
      return `${minute} minutes`;
    }
  }
};

export const CHART_COLOR = [
  '#b78276',
  '#3b6048',
  '#f2b146',
  '#003a59',
  '#ffe57b',
  '#657f84',
  '#567a79',
  '#c45608',
  '#ff944e'
];

export const EMPTY_DATA = {
  datasets: [{
    data: [1],
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)'
  }],
  labels: ['not working yet']
};
