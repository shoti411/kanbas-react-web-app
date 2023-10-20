import './../../../styles.css';
import './../Modules/index.css';
import Modules from "../Modules";
import CourseStatus from './CourseStatus';
function Home() {
    return (
      <div className="wd-course-page-and-navigation">
        <Modules/>
        <CourseStatus/>
      </div>
    );
  }
  export default Home;