export type Food = {
  _id: string;
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  imageUrl: string;
}

export type Logs = {
  _id: string;
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  date: Date;
  timestamp : Date|bigint|number
};

export type User = {
  _id: string;
  email: string;
  password: string;
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  imageUrl: string;
}
