import { useDispatch, useSelector } from "react-redux"
import { buyMilk } from "../features/milk/milkSlice";


function Milk() {
    const state = useSelector((state) => state.milk);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Milk Number: { state.numOfMilks }</h2>
            <button onClick={() => dispatch(buyMilk())}>Buy Milk</button>
        </div>
    )
};
export default Milk;
