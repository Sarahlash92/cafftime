import { DateAdapter } from "chart.js";

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
  date: Date | string;
  timestamp : Date;
  logs: Logs[];
};

export type User = {

  _id: string;
  email: string;
  password: string;
  dailyLimit: number;
  sleepTreshold: number;
  sleepTime: string;
  timezone: string;
}

export type foobDdp = {

  _id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;
  imageUrl: string;

}

export type foobDdpedit= {

  
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;

}

export type DetaDetailProps = {
  selectedItem : {

    _id: string;
    name: string;
    baseAmount: number;
    caffeine: number;
    timestamp: string;
    imageUrl: string;

  };
}