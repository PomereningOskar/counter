import React from "react";

const Step = (props) => {
    // const change = (event) => {
    //     props.setStepValue(Number(event.target.value));
    // };

    return <input type="number" onChange={(event) => {
        props.setStepValue(Number(event.target.value))
    }} />;
};

export default Step;
