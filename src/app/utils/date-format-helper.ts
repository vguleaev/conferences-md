import * as moment from 'moment';

export class DateFormatHelper {
  public static formatUnixDate(unixTimestamp: number): string {
    if (unixTimestamp) {
      return moment.unix(unixTimestamp).format('MMMM Do YYYY, HH:mm:ss');
    }
    return 'Wrong date format';
  }

  public static convertMomentToUnixTimestamp(date: moment.Moment): number {
    return date.utc().unix();
  }

  public static convertUnixTimestampToMoment(unixTimestamp: number): moment.Moment {
    return moment.unix(unixTimestamp);
  }
}
