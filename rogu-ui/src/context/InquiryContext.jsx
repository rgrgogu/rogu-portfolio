import { useReducer, createContext } from "react";

export const InquirysContext = createContext();

export const inquirysReducer = (state, action) => {
  switch (action.type) {
    case "SET_INQUIRIES":
      return {
        form: action.payload.items,
        count: action.payload.pagination.count,
        currentPage: 1,
        totalPages: action.payload.pagination.pageCount,
      };
    case "DELETE_INQUIRY":
      return {
        form: state.form.filter((item) => item._id !== action.payload._id),
        currentPage: state.currentPage,
        totalPages: state.totalPages,
        count: state.form.length - 1,
      };
    default:
      return state;
  }
};

// Returns the provider we need to access the context inside of it
export const InquirysContextProvider = ({ children }) => {
  // useReducer
  // similar to useState but how we update the state object
  const [state, dispatch] = useReducer(inquirysReducer, {
    form: null,
    count: 0,
    currentPage: 0,
    totalPages: 0,
  });

  return (
    <InquirysContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InquirysContext.Provider>
  );
};
