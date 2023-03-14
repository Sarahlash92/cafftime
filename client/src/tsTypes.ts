
export type Food = {
  _id?: string;
  id?: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  imageUrl?: string;
  timestamp: string ;
}

export type Logs = {
  _id?: string;
  id?: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  date:  string ;
  timestamp :  string ;
  logs?: Logs[];

};

export type User = {
  _id?: string;
  email?: string;
  password?: string;
  dailyLimit: number;
  sleepTreshold: number;
  sleepTime: string;
  timezone?: string;
}




