import { GET_CONTACTS } from './types';

export const getContact = () => {  
    //return to reducer 
    return {
        type: GET_CONTACTS
    }
}