import { Key } from "react";

export interface Bugdet {
    id: Key | number;
    description: string;
    value: string
    date: string;
    isPositive: boolean;
  }