import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="text-6xl text-red-300" style={{color:'pink'}}>
                Bienvenidos a Mundo Fibro {greeting}
            </h1>
            <ItemCount/>
        </div>
        )
    }

export default ItemListContainer