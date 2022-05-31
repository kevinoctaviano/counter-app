import React from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterStorage");
  console.log(storage);
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
}
class CounterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // count: 0
      count: getStateFromLocalStorage()
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    // using props
    this.incrementUsingProp = this.incrementUsingProp.bind(this)
    this.decrementUsingProp = this.decrementUsingProp.bind(this)

    // LocalStorage
    this.incrementFromLocalStorage = this.incrementFromLocalStorage.bind(this)
    this.decrementFromLocalStorage = this.decrementFromLocalStorage.bind(this)
    this.resetFromLocalStorage = this.resetFromLocalStorage.bind(this)
  }

  // Class Component
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  incrementUsingProp() {
    // destructuring props
    const { max, step } = this.props;
    this.setState((counter) => { //counter menggantikan state yang ada di constructor
      if(counter.count >= max) return; 
      return { count: counter.count + step }
    })
  }

  decrementUsingProp() {
    // destructuring props
    const { step, min } = this.props;
    this.setState((counter) => {
      if (counter.count <= min) return;
      return { count: counter.count - step }
    })
  }

  // Function Localstorage
  // Menyimpan data ke localstorage sehingga saat di refresh tidak berubah angkanya
  incrementFromLocalStorage() {
    this.setState((state, props) => {
      const { max, step } = props;
      if (state.count >= max) return;
      return { count: state.count + step }
    },
    // Callback untuk menyimpan ke local storage dengan nama item counterStorage yang berisi JSON dengan value angka state
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("After", localStorage);
      }
    )
  }

  decrementFromLocalStorage() {
    this.setState((state, props) => {
      const { min, step } = props;
      if (state.count <= min) return;
      return { count: state.count - step }
    },
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("After", localStorage);
      }
    )
  }

  resetFromLocalStorage() {
    this.setState(() => {
      return { count: 0 }
    },
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("After", localStorage);
      }
    )
  }

  render(){
    return(
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <h4 className="judul" align="center">Counter Class</h4>
        <section className="controls">
          <button onClick={this.incrementFromLocalStorage}>Increment</button>
          <button onClick={this.decrementFromLocalStorage}>Decrement</button>
          <button onClick={this.resetFromLocalStorage}>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;