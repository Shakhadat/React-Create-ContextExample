import { PureComponent } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends PureComponent {
  render() {
    return (
      <>
        <ComponentB />
      </>
      
    );
  }
}

export default ComponentA;
