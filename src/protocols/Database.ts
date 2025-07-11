export interface CarrierDB {
  id: number;
  name: string;
  code: number;
}

export interface PhoneDB {
  id: number;
  phone_number: string;
  carrier_id: number;
  name: string;
  document: string;
}

export interface RechargeDB {
  id: number;
  phone_id: number;
  amount: number;
}