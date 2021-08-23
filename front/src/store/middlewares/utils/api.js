import axios from 'axios';
// on peut pré-configurer une instance d'axios
// ici on passe le baseUrl, ainsi quand on utilisera "api"
// on aura pas besoin de préciser cette valeur de baseUrl
const api = axios.create({
  baseURL: 'http://notabebe-back.herokuapp.com/',
});

export default api;
