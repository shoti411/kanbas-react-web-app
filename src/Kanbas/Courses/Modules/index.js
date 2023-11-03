import ModuleList from "./ModuleList";
import './../../../styles.css';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addModule } from "./modulesReducer";

import {CiCircleCheck} from 'react-icons/ci';
import {AiOutlinePlus} from 'react-icons/ai';

function Modules() {
  
  const { courseid } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <div className="row wd-course-modules-page">
      <div className="container wd-course-home-header float-end">
        <button type="button" className="btn btn-light">Collapse All</button>
        <button type="button" className="btn btn-light">View Progress</button>

        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <CiCircleCheck/>
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/#">Publish All modules and items</a></li>
            <li><a className="dropdown-item" href="/#">Publish modules only</a></li>
            <li><a className="dropdown-item" href="/#">Unpublish all modules and items</a></li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger" onClick={() => dispatch(addModule({ ...module, course: courseid }))}>
          <AiOutlinePlus/>
          Module
        </button>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;