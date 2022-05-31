import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset } from "./actions";

export default function CounterRedux({ max, min, step }) {
  const dispatch = useDispatch(); 
  const count = useSelector((state) =>  state.count);

  return (
    <div className="Counter">
            <p className="count">{count}</p>
            <h4 className="judul" align="center">Counter Redux</h4>
            <section className="controls">
                <button onClick={() => increment(dispatch, max, step, count)}>Increment</button>
                <button onClick={() => decrement(dispatch, min, step, count)}>Decrement</button>
                <button onClick={() => reset(dispatch, min)}>Reset</button>
            </section>
        </div>
    )
}
