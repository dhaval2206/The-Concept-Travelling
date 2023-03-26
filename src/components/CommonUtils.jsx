import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";

export const CommonUtils = {
    getKeyValuesFromArray:(array,key) => {
        if(array && array.length > 0) {
            let returnArray = [];
            if(key && key.length > 0) {
                for (let obj of array) {
                    returnArray.push(obj[key]);
                }
            }
            return returnArray;
        } else {
            return [];
        }
    },
    getKeyValuesFromArrayUnderCaps:(array,key) => {
        if(array && array.length > 0) {
            let returnArray = [];
            if(key && key.length > 0) {
                for (let obj of array) {
                    returnArray.push(obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase());
                }
            }
            return returnArray;
        } else {
            return [];
        }
    },
    getMenuItemFromArray:(array,key) => {
        if(array && array.length > 0) {
            let returnArray = [];
            let counter=0;
            if(key && key.length > 0) {
                for (let obj of array) {
                    if(counter % 15 === 0) { 
                        returnArray.push( 
                            {
                                label:<Link to={"/country/"+obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase()}>{obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase()}</Link>,
                                key:obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase(),
                                type:"group"
                            }
                        );
                    } else {
                        returnArray.push( 
                            {
                                label:<Link to={"/country/"+obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase()}>{obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase()}</Link>,
                                key:obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase(),
                            }
                        );
                    }
                    counter++;
                }
            }
            return returnArray;
        } else {
            return [];
        }
    },
    searchKeyValuesFromArrayUnderCaps:(array,key,search) => {
        if(array && array.length > 0) {
            let returnArray = {};
            if(key && key.length > 0 && search && search.length > 0) {
                for (let obj of array) {
                    if(obj[key].trim().toLowerCase().replaceAll(" ","-").toUpperCase() === 
                    search.trim().toLowerCase().replaceAll(" ","-").toUpperCase())
                    returnArray = (obj);
                }
            }
            return returnArray;
        } else {
            return {};
        }
    }
};