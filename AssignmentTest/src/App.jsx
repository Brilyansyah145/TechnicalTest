import { useState } from 'react'
import './App.css'


const App = () => {
  const [inputData, setInputData] = useState([
    { label: 'Mahasiswa 1', value: '' },
    { label: 'Mahasiswa 2', value: '' },
    { label: 'Mahasiswa 3', value: '' },
    { label: 'Mahasiswa 4', value: '' },
    { label: 'Mahasiswa 5', value: '' },
    { label: 'Mahasiswa 6', value: '' },
    { label: 'Mahasiswa 7', value: '' },
    { label: 'Mahasiswa 8', value: '' },
    { label: 'Mahasiswa 9', value: '' },
    { label: 'Mahasiswa 10', value: '' },
  ]);

  const handleChangeNilai = (index, event) => {
    const updatedData = [...inputData];
    updatedData[index].value = event.target.value;
    setInputData(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log ('Data Penilaian:', inputData);
  };

  return (
    <div>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <form onSubmit={handleSubmit}>
      <table>
        {inputData.map((mahasiswa, index) => (
          <tr key={index}>
            <td>{mahasiswa.label}</td>
            <td>
              <input
                type="number"
                placeholder="1"
                value={mahasiswa.value}
                onChange={(event) => handleChangeNilai(index, event)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="1"
                value={mahasiswa.value}
                onChange={(event) => handleChangeNilai(index, event)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="1"
                value={mahasiswa.value}
                onChange={(event) => handleChangeNilai(index, event)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="1"
                value={mahasiswa.value}
                onChange={(event) => handleChangeNilai(index, event)}
              />
            </td>
          </tr>
        ))}
      </table>
      <div><input type='submit' /></div>
      </form>
    </div>
  );
};

export default App;


