import { Key } from "react";

export interface Budget {
    id: Key | number;
    description: string;
    value: number
    date: Date;
    isPositive: boolean;
  }