import axios from "axios";
const api= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/todos/1",
});
export default api