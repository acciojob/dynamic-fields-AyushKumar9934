import React, { useState } from 'react';
import NewInput from './NewInput';

const App = () => {
  const [currStudent, setCurrStudent] = useState([Math.random() * 100000]);

  function removeOne(button_id) {
    setCurrStudent(currStudent.filter(id => id !== button_id));
  }

  function addMore(e) {
    e.preventDefault();
    setCurrStudent([...currStudent, Math.random() * 100000]);
  }
  function console(e){
    {
      e.preventDefault();
      currStudent.map((id)=>{
      console.log();(<NewInput key={id} div_id={id} removeOne={removeOne} />)
      })
    }
  }

  return (
    <div>
       <form>
        {
          currStudent.map(id => <NewInput key={id} div_id={id} removeOne={removeOne} />)
        }
        <button onClick={addMore}>Add More...</button>
        <button onClick={console} type="submit">Submit</button>
       </form>
    </div>
  )
}
export default App