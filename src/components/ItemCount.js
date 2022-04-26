import { useState } from "react"

const ItemCount= ({stock="7"}) => {

    const [ count, setCount ] = useState (1)

    const addHandler = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }

    const subHandler = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <>
        <div>Agregar al carrito</div>
        <button class="btn btn-circle btn-xs btn-error" onClick={subHandler}> - </button>
        <strong> {count} </strong>
        <button class="btn btn-circle btn-xs btn-error" onClick={addHandler}> + </button>
        <div><button onClick={reset}> Reset </button></div>
        </>
    )
}

export default ItemCount