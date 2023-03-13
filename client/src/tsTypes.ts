// import { DateAdapter } from "chart.js";

// export type Food = {
//   _id: string;
//   id: string;
//   name: string;
//   baseAmount: number;
//   caffeine: number;
//   imageUrl: string;
// }

// export type Logs = {
//   _id: string;
//   id: string;
//   name: string;
//   baseAmount: number;
//   caffeine: number;
//   date: Date | string;
//   timestamp : Date;
//   logs: Logs[];
// };

// export type User = {

//   _id: string;
//   email: string;
//   password: string;
//   dailyLimit: number;
//   sleepTreshold: number;
//   sleepTime: string;
//   timezone: string;
// }

export type foobDdp = {

  _id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;
  imageUrl?: string;

}

// export type foobDdpedit= {

  
//   name: string;
//   baseAmount: number;
//   caffeine: number;
//   timestamp: string;

// }

// export type DetaDetailProps = {
//   selectedItem : {

//     _id: string;
//     name: string;
//     baseAmount: number;
//     caffeine: number;
//     timestamp: string;
//     imageUrl: string;

//   };
// }

export type DateObjectUnits = {
  year?: number;
  day?: number;
  ordinal?: number;
  weekYear?: number;
  weekNumber?: number;
  weekday?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
};
export type DateObject = DateObjectUnits & {
  zone?: string;
  locale?: string;
  outputCalendar?: string;
  numberingSystem?: string;
};
export type Food = {
  _id?: string;
  id?: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  imageUrl?: string;
  timestamp: string ;
}

// export type foobDdp = {
//   _id?: string;
//   name: string;
//   baseAmount: number;
//   caffeine: number;
//   timestamp?: string;
//   imageUrl?: string;
// }

export type setLogs = {
  _id: string;
  id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  date: number | string | Date;
  timestamp: number | string | Date;
  logs: Logs[];
}

export type Logs = {
  _id?: string;
  id?: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  date?: number | string | Date;
  timestamp : number | string | Date;
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

export type foobDdpedit= {
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;
}



export type DataDetailProps = {
  selectedItem :Food;
  setItemAdded: React.Dispatch<React.SetStateAction<boolean>>
}