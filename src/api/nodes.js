import axios from 'axios';

const API_URL = "http://localhost:8000/";  // Adjust this to your backend URL

export const saveNode = (nodeData) => {
    return axios.post(`${API_URL}path_to_save_node_endpoint/`, nodeData);
};