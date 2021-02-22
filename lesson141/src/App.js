import AppProvider from "./AppContext";
import UserInfo from "./UserInfo";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <AppProvider>
        <UserInfo />
        <Button />
      </AppProvider>
    </div>
  );
};

export default App;
