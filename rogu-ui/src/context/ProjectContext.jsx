import { useReducer, createContext } from "react";

export const ProjectsContext = createContext();

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        form: action.payload.items,
        count: action.payload.pagination.count,
        currentPage: 1,
        totalPages: action.payload.pagination.pageCount,
      };
    case "CREATE_PROJECT":
      return {
        form: [action.payload, ...state.form],
        count: state.count + 1,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
      };
    case "DELETE_PROJECT":
      return {
        form: state.form.filter((item) => item._id !== action.payload._id),
        count: state.count - 1,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
      };
    case "UPDATE_PROJECT":
      return {
        form: state.form.map((project) => {
          return project._id === action.payload._id ? action.payload : project;
        }),
        count: state.count,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
      };
    // case "SET_CURRENT_PAGE":
    //   return {
    //     currentPage: action.payload,
    //     totalPages: state.totalPages,
    //   };
    default:
      return state;
  }
};

// Returns the provider we need to access the context inside of it
export const ProjectsContextProvider = ({ children }) => {
  // useReducer
  // similar to useState but how we update the state object
  const [state, dispatch] = useReducer(projectsReducer, {
    form: null,
    count: 0,
    currentPage: 0,
    totalPages: 0,
  });

  return (
    <ProjectsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};
