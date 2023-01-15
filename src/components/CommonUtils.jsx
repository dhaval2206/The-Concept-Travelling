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