import { PureComponent } from "react";
import ComponentA from "./ComponentA";
import { UserProvider } from "./userContext";

class App extends PureComponent {
  render() {
    return (
      <>
        <UserProvider value="Shahodat">
          <ComponentA />
        </UserProvider>
      </>
    );
  }
}

export default App;
