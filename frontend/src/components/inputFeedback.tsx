import React from "react";

const InputFeedback = ({msg = ''}: { msg: false | string }) => {
    return (
        <>
            {msg && <div className={`invalid-feedback d-block fs-6`}>{msg}</div>}
        </>
    )
}

export default InputFeedback