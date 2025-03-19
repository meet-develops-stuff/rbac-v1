import departments from './lib/departments';
import members from './lib/members';

const initLocalStorage = () => {
    if (!localStorage.getItem('departments')) {
        localStorage.setItem('departments', JSON.stringify(departments));
    }
    if (!localStorage.getItem('members')) {
        localStorage.setItem('members', JSON.stringify(members));
    }
};

export default initLocalStorage;
