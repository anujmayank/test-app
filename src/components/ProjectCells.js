import '../App.css';

function ProjectDetails({projectData}) {

    return (
        <div>
            <p className="project">
                <span>{projectData.copId}</span>
                <span> AC-{projectData.acId}</span>
            </p>
            <p className="projectLine">
                <span>{projectData.project.name}.</span>
                <span>{projectData.subProject.name}</span>
            </p>
        </div>
    );
}

export default ProjectDetails;
