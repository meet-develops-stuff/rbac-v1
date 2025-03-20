import departments from './lib/departments';
import members from './lib/members';

const initLocalStorage = () => {
        localStorage.setItem('departments', JSON.stringify(departments));
    
 
        localStorage.setItem('members', JSON.stringify(members));
   
};

export default initLocalStorage;
