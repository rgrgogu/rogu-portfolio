import { InquirysContext } from "../context/InquiryContext";
import { useContext } from "react";

export const useInquirysContext = () => {
  const context = useContext(InquirysContext);

  if (!context) {
    throw Error(
      "useInquirysContext must be used inside in InquirysContextProvider"
    );
  }

  return context;
};
