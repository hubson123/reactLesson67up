import {useContext} from 'react';

import {AppContext} from './AppContext';

const UserInfo = () => {
    const {isUserLogin} = useContext(AppContext);
    const info = isUserLogin
       ? 'zalogowany'
       : 'niezalogowany';
    return ( <div>
       Użytkownik jest {info}
    </div> );
}
 
export default UserInfo;