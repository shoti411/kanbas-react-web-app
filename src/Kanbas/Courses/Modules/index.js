import ModuleList from "./ModuleList";
import './../../../styles.css';
import './index.css';
import {CiCircleCheck} from 'react-icons/ci';
import {AiOutlinePlus} from 'react-icons/ai';

function Modules() {
  return (
    <div>
      <div class="container wd-course-home-header">
        <button type="button" class="btn btn-light">Collapse All</button>
        <button type="button" class="btn btn-light">View Progress</button>

        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <CiCircleCheck/>
            Publish All
          </button>
          <ul class="dropdown-menu">
            <li class="list-group-item"><a class="dropdown-item" href="#">Publish All modules and items</a></li>
            <li class="list-group-item"><a class="dropdown-item" href="#">Publish modules only</a></li>
            <li class="list-group-item"><a class="dropdown-item" href="#">Unpublish all modules and items</a></li>
          </ul>
        </div>
        <button type="button" class="btn btn-danger">
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