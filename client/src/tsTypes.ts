export type Food = {
  _id: string;
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  imageUrl: string;
}

export type foobDdp = {
  _id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;
  imageUrl: string;
}

export type Logs = {
  _id: string;
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  date: Date;
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
}

export type foobDdpedit= {
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;
}

export type DataDetailProps = {
  selectedItem : {
    _id: string;
    name: string;
    baseAmount: number;
    caffeine: number;
    imageUrl: string;
  };
  setItemAdded :  React.Dispatch<React.SetStateAction<boolean>>
}
