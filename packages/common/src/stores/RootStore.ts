import { createContext } from "react";
import { observable } from "mobx";

export class RootStore {
  @observable num = 1;
}

export const RootStoreContext = createContext(new RootStore());
