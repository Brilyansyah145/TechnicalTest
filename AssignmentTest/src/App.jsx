import { useState } from 'react'
import './App.css'


const App = () => {
  const [nilai, setNilai] = useState('');


  const handleChangeNilai = (event) => {
    setNilai(event.target.value);
  };

 

  return (
    <div>
      <table>
        <td>
          <tr>Mahasiswa 1</tr>
        </td>
        <td>
          <tr><input type="number" placeholder='1' value={nilai} onChange={handleChangeNilai}/></tr>
        </td>
        <td><tr><input type="number" placeholder='1' value={nilai} onChange={handleChangeNilai}/></tr></td>
        <td>
          <tr><input type="number" placeholder='1' value={nilai} onChange={handleChangeNilai}/></tr>
        </td>
        <td>
          <tr><input type="number" placeholder='1' value={nilai} onChange={handleChangeNilai}/></tr>
        </td>
      </table>
    </div>
    
    
  
  );
};

export default App;