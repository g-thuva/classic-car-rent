import { siteData } from '../data/site';
export const formatPrice = (amount?: number) => {
  if (amount === undefined) return '-';
  return `${siteData.currency} ${amount.toLocaleString('en-CH')}`;
};
