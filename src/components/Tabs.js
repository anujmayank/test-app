import '../App.css';
import {useEffect, useState} from "react";

import Tab from './Tab';
import HashMap from "../utils/Hashmap";

const evaluatorMap = new HashMap();
const creatorMap = new HashMap();

function Tabs() {

    const [selectedTab, setSelectedTab] = useState("Evaluator");
    const [assessmentData, setAssessmentData] = useState();
    const [evaluatorData, setEvaluatorData] = useState();
    const [creatorData, setCreatorData] = useState();
    const [count, setCount] = useState({evaluator:0, creator:0})

    const getData=()=>{
        Promise.all([
                        fetch('./../evaluator-data.json').then(value => value.json()),
                        fetch('./../creator-data.json').then(value => value.json())
                    ])
            .then((value) => {
                setCount({evaluator:value[0].length, creator:value[1].length})
                value[0].forEach((item)=>{
                    evaluatorMap.setItem(item.project.name, item);
                });
                value[1].forEach((item)=>{
                    creatorMap.setItem(item.project.name, item);
                });

                setEvaluatorData(evaluatorMap);
                setCreatorData(creatorMap);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const tabSelectHandler = (selectedTab)=>{
        setSelectedTab(selectedTab);
        if(selectedTab==='Evaluator'){
            setAssessmentData(evaluatorData)
        } else {
            setAssessmentData(creatorData)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
            setAssessmentData(evaluatorData)
    },[evaluatorData]);



    return (
        <>
            <div className="container">
                <div className="row borderBottom">
                    <div className="col-6">
                        <div className={`col cursor ${selectedTab==='Evaluator' ? "Tab" : null}`} onClick={()=> tabSelectHandler("Evaluator")}>
                            EVALUATOR - ({count.evaluator})
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`col cursor ${selectedTab==='Creator' ? "Tab" : null}`} onClick={()=> tabSelectHandler("Creator")}>
                            CREATOR - ({count.creator})
                        </div>
                    </div>
                </div>
            </div>
            {assessmentData && <Tab assessmentData={assessmentData} selectedTab={selectedTab}/>}
        </>
    );
}

export default Tabs;
