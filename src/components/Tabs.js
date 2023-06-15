import React, { useState } from "react";

const Tabs = ({ tabone, tabtwo }) => {

    let [tab, setTab] = useState(tabone[0].content);
    let [tabA, setTabA] = useState(tabtwo[0].content);

    function handelTabOne(item) {
        setTab(item.content);
    }

    function handelTabTwo(item){
        setTabA(item.content);
    }
    
    return (
        <div>
            <ul>
                {
                    tabone.map((item, index) => {
                        return <li onClick={() => handelTabOne(item)} key={index}>{item.title}</li>
                    })
                }
            </ul>
            <p>{tab}</p>
            <ul>
                {
                    tabtwo.map((item, index) => {
                        return <li onClick={() => handelTabTwo(item)} key={index}>{item.title}</li>
                    })
                }
            </ul>
            <p>{tabA}</p>
        </div>
    )
}

export default Tabs;