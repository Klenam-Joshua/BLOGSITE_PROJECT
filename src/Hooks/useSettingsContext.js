

import { useContext } from "react"
import { SettingsContext } from "../Context/SettingsContext"

export const useSettinsContext = () => {

    const settingsContext = useContext(SettingsContext);

  
    return settingsContext;
    
}


