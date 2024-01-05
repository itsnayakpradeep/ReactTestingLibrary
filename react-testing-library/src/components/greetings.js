import React, { useState } from "react";

const Greetings = () => {
const [changeText, setChangeText] = useState(false);
const changeTextHandler = () => {
    setChangeText(true)
}
    return (
        <div>
            <h1>Happy New 2024 </h1>
            {!changeText && <h3>It's good to see you!</h3>}
            {changeText && <h3> YEAR 2024 </h3>}
            <button onClick={changeTextHandler}>Submit</button>
        </div>
    )
}

export default Greetings;