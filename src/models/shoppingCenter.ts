export interface ShopppingCenterInterface {
  name: string;
  logoURL: string;
  openingHours: string;
  business: BusinessCategory[];
}
export interface BusinessCategory {
  id: string;
  description: string;
}