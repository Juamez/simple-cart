import { ReactNode } from "react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface AddedProduct {
  id: string;
  title: string;
  image: string;
  price: number;
}

export interface Subtotal {
  param1: number;
  param2: number;
}

export interface AuxProps {
  children: ReactNode;
}