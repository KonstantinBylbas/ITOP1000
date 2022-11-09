import React, { useState } from "react";

export const RateContext = React.createContext(null);

export default function RateContextProvider({ children }) {

    const [contextRate, setContextRate] = useState([{ txt: 'Українська гривня', rate: 1, cc: 'UAN' }]);

    return (
        <RateContext.Provider value={{
            contextRate, setContextRate
        }} >
            {children}
        </RateContext.Provider>
    );
}