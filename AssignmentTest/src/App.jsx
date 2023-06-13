import { useState } from 'react'
import './App.css'


const App = () => {
  const [nilai, setNilai] = useState('');
  const [pesan, setPesan] = useState('');

  const handleChangeNilai = (event) => {
    setNilai(event.target.value);
  };

  const handleSimpan = () => {
    // Lakukan pemrosesan data sesuai kebutuhan dosen di sini
    // Contoh: Hitung rata-rata nilai dan berikan pesan sesuai dengan ketentuan dosen
    let rataNilai = 0;
    if (nilai >= 80) {
      rataNilai = 'A';
      setPesan('Selamat, Anda mendapatkan nilai A!');
    } else if (nilai >= 70) {
      rataNilai = 'B';
      setPesan('Anda mendapatkan nilai B. Perlu meningkatkan lagi!');
    } else if (nilai >= 60) {
      rataNilai = 'C';
      setPesan('Anda mendapatkan nilai C. Perlu belajar lebih giat lagi!');
    } else {

      setPesan('Anda mendapatkan nilai D. Perlu melakukan perbaikan.');
    }

    // Output nilai dan pesan ke konsol (bisa diubah sesuai kebutuhan dosen)
    console.log('Nilai:', nilai);
    console.log('Pesan:', pesan);
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
      </table>
    </div>
    
    
    
    // <div>
    //   <label>
    //     Mahasiswa 1:
    //     <input type="number" placeholder='1' value={nilai} onChange={handleChangeNilai} />
    //     <input type="number" placeholder='6' value={nilai} onChange={handleChangeNilai}/>
    //   </label>
    //   <br />
    //   <button onClick={handleSimpan}>Simpan</button>
    // </div>
  );
};

export default App;
