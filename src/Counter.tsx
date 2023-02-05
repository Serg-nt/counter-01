import classes from "./Counter.module.css";

type PropsType = {
    value: number
    counterIncrement: () => void
    counterReset: () => void
}

const Counter = (props: PropsType) => {

    const counterClass = props.value === 5 ? classes.red : classes.green

    return <div>
        <h1 className={counterClass}>{props.value}</h1>
        <button onClick={props.counterIncrement} disabled={props.value === 5 && true}>Inc.</button>
        <button onClick={props.counterReset} disabled={props.value === 0 && true}>Reset</button>
    </div>

}

export default Counter