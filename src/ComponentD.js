import {PureComponent} from 'react';
import { UserConsumer } from './userContext';

class ComponentD extends PureComponent {
  render(){
    return (
      <>
      <UserConsumer>
          {
              (username)=>{
                  return  <h1>Assalomu alaykum, {username}, sizni texnik interviewdan muvaffaqiyatli o'tganingiz bilan tabriklayman!</h1>
              }
          }
         
      </UserConsumer>
          
      </>
     );
  }
  
}

export default ComponentD;
