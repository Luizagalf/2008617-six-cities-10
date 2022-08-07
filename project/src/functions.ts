import { Offer } from './types/offer';

export const groupBy = (array: any[]): { [key: string]: Offer[] } =>
  array.reduce((result, currentValue) => {
    (result[currentValue['city']] = result[currentValue['city']] || []).push(
      currentValue
    );
    return result;
  }, {});
