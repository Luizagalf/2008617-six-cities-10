import { Offer } from './types/offer';

export const groupBy = (
  array: any[],
  key: string
): { [key: string]: Offer[] } =>
  array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
