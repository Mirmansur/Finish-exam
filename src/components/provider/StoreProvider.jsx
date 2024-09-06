"use client";

import { Provider } from "react-redux";
import store from "@/app/redux/store/index";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
