import { Dayjs } from 'dayjs';
import moment from 'moment';

export const rules = {
  required: (message: string = 'Required field') => ({
    required: true, 
    message
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      if(value.isSame(moment()) || value.isAfter(moment())) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message));
    }
  })
} 