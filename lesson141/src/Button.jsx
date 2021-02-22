import { AppContext } from './AppContext';
import  { useContext } from 'react';
const Button = () => {
    const {toggleLoggedState} = useContext(AppContext);
    return (  <button
        onClick={toggleLoggedState}>
        Przełącz stan użytkownika
        </button> );
}
 
export default Button;