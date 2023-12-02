import React, { useEffect, useState } from "react";
import './../../../styles.css';
import './../../Courses/Assignments/index.css';
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
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseid } = useParams();


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseid, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    findModulesForCourse(courseid)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseid, modules, module]);




  return (
    <div className="wd-course-assignments-page-container">
      <ul className="list-group wd-course-home-modules-list">
        <li className="list-group-item wd-course-modules-edit-module-block">
          <button onClick={handleAddModule}>
            Add
          </button>
          <button
            onClick={() => handleDeleteModule(module._id.$oid)}>
            Delete
          </button>
          <button onClick={handleUpdateModule}>
            Update
          </button>

          <input className="form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea className="form-control" value={module.description}
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
                        <button
                          onClick={() => dispatch(setModule(module))}>
                          <HiEllipsisVertical />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteModule(module._id.$oid)}>
                          Delete
                        </button>
                        
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

