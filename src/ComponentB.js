import {PureComponent} from 'react';
import ComponentC from './ComponentC';

class ComponentB extends PureComponent {
  render(){
    return (
      <>
          <ComponentC/>
      </>
     );
  }
  
}

export default ComponentB;
