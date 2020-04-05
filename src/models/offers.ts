export interface OfferInterface {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  store: StoreInfo;
  businessId: string;
}

export interface StoreInfo {
  id: string;
  name: string;
}