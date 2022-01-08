import '../App.css';
import ProjectDetails from "./ProjectDetails";

function Tab({assessmentData, selectedTab}) {

    return (
        <div className="container">
            <div className="row tabContent">
                <div className="col-12">
                    <div>My 'Evaluation Ready' Assessments as {selectedTab}</div>
                    <ProjectDetails projectData={assessmentData}/>
                </div>
        </div>
        </div>
    );
}

export default Tab;
