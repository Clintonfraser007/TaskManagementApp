import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

// Action Types
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';


export const fetchTasks = () => async dispatch => {
  dispatch({ type: 'FETCH_TASKS_REQUEST' });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
  }
};

export const fetchTask = id => async dispatch => {
  dispatch({ type: 'FETCH_TASK_REQUEST' });
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: 'FETCH_TASK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASK_FAILURE', payload: error.message });
  }
};

export const createTask = task => async dispatch => {
  try {
    const response = await axios.post(API_URL, task);
    dispatch({ type: 'CREATE_TASK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_TASK_FAILURE', payload: error.message });
  }
};

export const updateTask = (id, task) => async dispatch => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task);
    dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_TASK_FAILURE', payload: error.message });
  }
};

export const deleteTask = id => async dispatch => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_TASK_FAILURE', payload: error.message });
  }
};
