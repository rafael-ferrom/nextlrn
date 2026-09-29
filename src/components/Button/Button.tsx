'use client'

import { useState } from "react"

const NameButton = () => {

    const [name, setName] = useState("Rafinha")

    function ChangeName() {
        setName("Fafinha")
    }


    return(
        <div>
            <button onClick={ChangeName}>Change name</button>
            <p>{name}</p>
        </div>
    )
}

export default NameButton