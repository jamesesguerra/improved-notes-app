import axios from "axios";

const BASE_URL = 'https://immense-depths-71989.herokuapp.com/letters';

const getAll = () => {
    const request = axios.get(BASE_URL);
    return request.then(response => response.data);
}

const create = (newLetter) => {
    const request = axios.post(BASE_URL, newLetter);
    return request.then(response => response.data);
}

const update = (id, updatedLetter) => {
    const request = axios.put(`${BASE_URL}/${id}`, updatedLetter);
    return request.then(response => response.data);
}

const remove = (id) => {
    const request = axios.delete(`${BASE_URL}/${id}`);
    return request.then(response => response);
}

const actions = {
    getAll,
    create,
    update,
    remove
}

export default actions;