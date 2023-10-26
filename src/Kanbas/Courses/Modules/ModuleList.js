import React, { useState } from "react";
import './../../../styles.css';
import './index.css';
import { useParams } from "react-router-dom";
import db from "../../Database";
import { HiEllipsisVertical } from 'react-icons/hi2';
import { CiCircleCheck } from 'react-icons/ci';
import { FaGripVertical } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";



function ModuleList() {
  const { courseid } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch()



  return (
    <div className="wd-course-assignments-page-container">
      <ul className="list-group wd-course-home-modules-list">
        <li className="list-group-item">
          <button onClick={() => dispatch(addModule({ ...module, course: courseid }))}>Add</button>
          <button
            onClick={() => dispatch(deleteModule(module._id))}>
            Delete
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>

          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {

          modules
            .filter((module) => module.course === courseid)
            .map((module, index) => (
              <li key={index} className="list-group-item-secondary">
                <button
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <div className="wd-course-home-modules-list-title">
                  <div className="wd-course-home-modules-list-title-left">
                    <div className="wd-course-home-modules-list-title-vertical-ellipses">
                      <FaGripVertical />
                    </div>
                    <div>
                      <h5>{module.name}</h5>
                    </div>
                  </div>
                  <div>
                    <div className="float-end wd-course-home-modules-icons-container">
                      <div className="wd-course-home-modules-list-icons">
                        <CiCircleCheck />
                        <HiEllipsisVertical />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-group">
                  <li className="list-group-item">
                    {module.description}
                    <div className="float-end wd-course-home-modules-icons-container">
                      <div className="wd-course-home-modules-icons"><CiCircleCheck /></div>
                      <div className="wd-course-home-modules-icons"><HiEllipsisVertical /></div>
                    </div>
                  </li>
                </ul>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;

