const initialState = {
    tasks: [],
    task: null,
    loading: false,
    error: null,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_REQUEST':
      case 'FETCH_TASK_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, loading: false, tasks: action.payload };
      case 'FETCH_TASK_SUCCESS':
        return { ...state, loading: false, task: action.payload };
      case 'FETCH_TASKS_FAILURE':
      case 'FETCH_TASK_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'CREATE_TASK_SUCCESS':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'CREATE_TASK_FAILURE':
      case 'UPDATE_TASK_FAILURE':
      case 'DELETE_TASK_FAILURE':
        return { ...state, error: action.payload };
      case 'UPDATE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task._id === action.payload._id ? action.payload : task
          ),
        };
      case 'DELETE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  