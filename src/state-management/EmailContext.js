import React, { useState , createContext } from "react";

export const EmailContext = createContext();

export const EmailProvider = props => {
    const [userEmail, setUserEmail] = useState(null)

    return (
        <EmailContext.Provider  value= {[userEmail, setUserEmail]}>
            {props.children}
        </EmailContext.Provider>
    )
}