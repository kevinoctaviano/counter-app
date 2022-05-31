import { useState, useEffect } from "react";

// Ini Functional Component
const CounterFunc = ({max, min, step}) => {
  // const [count, setCount] = useState(0);
  const getStateFromLocalStorage = (angka) => {
    const storage = localStorage.getItem("counterStorage");
    // console.log(storage);
    if (storage) return JSON.parse(storage).count;
    return localStorage.setItem("counterStorage", JSON.stringify(angka));
  }
  
  const [count, setCount] = useState(getStateFromLocalStorage({ count: 0 }));
  // console.log(count);

  // side effect (efek samping) merupakan Proses lain yang dijalankan selain proses utama
  useEffect(() => {
    document.title = `Your counter: ${count}` //componentDidMount
  }, [count]) //dependencies, merupakan suatu pengubah. Apabila nilai count berubah maka useEffect akan dijalankan
  

  // !Functional Component 
  // !Menggunakan useState, belum bisa menyimpan di local storage
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // const reset = () => setCount(0);

  // !Menggunakan useState, bisa menyimpan di localstorage belum ada max, min, dan step
  // const incrementFromLocalStorage = () => {
  //   setCount(count + 1);
  //   localStorage.setItem("counterStorage", JSON.stringify({ count: count + 1 }));
  // }

  // const decrementFromLocalStorage = () => {
  //   setCount(count - 1);
  //   localStorage.setItem("counterStorage", JSON.stringify({ count: count - 1 }));
  // }

  // const resetFromLocalStorage = () => {
  //   setCount(0);
  //   localStorage.setItem("counterStorage", JSON.stringify({ count: 0 }));
  // }

  // !Menggunakan useState, bisa menyimpan di localstorage ada max, min, dan step
  const incrementFromLocalStorage = () => {
    let tambah = count + step;
    if(count >= max) return alert("item sudah habis");
    setCount(tambah);
    localStorage.setItem("counterStorage", JSON.stringify({ count: tambah }));
  }

  const decrementFromLocalStorage = () => {
    let kurang = count - step;
    if(count <= min) return alert("item sudah habis");
    setCount(kurang);
    localStorage.setItem("counterStorage", JSON.stringify({ count: kurang }));
  }

  const resetFromLocalStorage = () => {
    setCount(0);
    localStorage.setItem("counterStorage", JSON.stringify({ count: 0 }));
  }

  return(
    <div className="Counter">
      <p className="count">{count}</p>
      <h4 className="judul" align="center">Counter Function</h4>
      <section className="controls">
        <button onClick={incrementFromLocalStorage}>Increment</button>
        <button onClick={decrementFromLocalStorage}>Decrement</button>
        <button onClick={resetFromLocalStorage}>Reset</button>
      </section>
    </div>
  )
}

export default CounterFunc;