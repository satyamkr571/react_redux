import studentData from "../component/studentdata";

const action_type = "SHOW_DATA";

export const addTodo = (content) => ({
  type: action_type,
  payload: {
    studentData,
  },
});
