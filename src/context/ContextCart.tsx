/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from "react";

import {AddedProduct, AuxProps} from "../types";
interface ContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addedProduct: AddedProduct[];
  setAddedProduct: React.Dispatch<React.SetStateAction<AddedProduct[]>>;
}

export const ContextCart = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  addedProduct: [],
  setAddedProduct: () => {},
});

export const ContextProvider: React.FC<AuxProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<AddedProduct[]>([]);
  const contextValue: ContextProps = {isOpen, setIsOpen, addedProduct, setAddedProduct};

  return <ContextCart.Provider value={contextValue}>{children}</ContextCart.Provider>;
};
