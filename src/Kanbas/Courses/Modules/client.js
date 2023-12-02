import axios from "axios";

// const COURSES_URL = "http://localhost:4000/api/courses";
// const MODULES_URL = "http://localhost:4000/api/modules";
// const MODULES_URL = "https://kanbas-node-server-app-hq4f.onrender.com/api/modules";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;
const MODULES_URL = `${API_BASE}/modules`;
export const updateModule = async (module) => {
  const response = await axios.
    put(`${MODULES_URL}/${module._id.$oid}`, module);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseid, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseid}/modules`,
      module
    );
    return response.data;
  };
  
export const findModulesForCourse = async (courseid) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseid}/modules`);
  return response.data;
};
