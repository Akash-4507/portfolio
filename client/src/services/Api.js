import axios from 'axios'


const API = "https://66e526e15cc7f9b6273c6b6e.mockapi.io"

const getProjects = () => axios.get(`${API}/projects`)
const getProjectbyID = (id) => axios.get(`${API}/projects/${id}`)
const addProject = (projectdata) => axios.post(`${API}/projects`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/projects/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/projects/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }