import '../App.css';
import ProjectCells from "./ProjectCells";
import {useState} from "react";

function ProjectDetails({projectData}) {

    const [projectName, setProjectName] = useState();

    const projectClickHandler = (name)=>{
        if(projectName === name){
            setProjectName();
        }else {
            setProjectName(name);
        }

    }

    return (
        <div>
                {Object.keys(projectData.data).map((project)=>(
                    <div key={project}>
                        <div onClick={()=>projectClickHandler(project)} className="projectName">{project}<i className="bi-caret-up-fill projectIcon"></i></div>
                        <div>
                            {projectData.getItem(project).map((item)=>(
                                <div key={item.acId}>
                                    {projectName===item.project.name ? null : <ProjectCells projectData={item} />}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ProjectDetails;
