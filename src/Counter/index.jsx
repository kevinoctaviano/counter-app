import React from "react";
import './styles.scss'

//Component
// import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";
// import CounterContextAPI from "./CounterContextAPI";
// import { CounterContextProvider } from "./CounterContextAPI/counterContext";
import CounterRedux from "./CounterRedux";
import { Provider } from "react-redux";
import store from "./CounterRedux/store"

const itemRemaining = 5;
// Ini menggunakan Counter class dan function
// const CounterApp = () => {
//   return(
//       <main className="Application">
//         <section className="Counters">
//           {/* <CounterClass max={itemRemaining} min={0} step={1} /> */}
//           {/* <CounterFunc max={itemRemaining} min={0} step={1} /> */}
//           <CounterContextAPI max={itemRemaining} min={0} step={1} />
//         </section>
//       </main>
//   )
// }


// Ini menggunakan Counter Context API
// const CounterApp = () => {
//   return(
//     <CounterContextProvider>
//       <main className="Application">
//         <section className="Counters">
//           {/* <CounterClass max={itemRemaining} min={0} step={1} /> */}
//           {/* <CounterFunc max={itemRemaining} min={0} step={1} /> */}
//           <CounterContextAPI max={itemRemaining} min={0} step={1} />
//         </section>
//       </main>
//     </CounterContextProvider>
//   )
// }
// }

// Ini CounterRedux
const CounterApp = () => {
  return(
    <Provider store={store}>
      <main className="Application">
        <section className="Counters">
          <CounterRedux max={itemRemaining} min={0} step={1} />
        </section>
      </main>
    </Provider>
  )
}
export default CounterApp