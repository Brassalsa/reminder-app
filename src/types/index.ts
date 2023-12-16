type Reminder = {
  id: number | string;
  dateTime: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  sms: string;
  reoccur: string | number;
  enabled: boolean;
  user: User;
};

type User = {
  id: number | string;
  email: string;
  password: string;
} | null;
