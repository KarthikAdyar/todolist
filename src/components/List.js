import '../css/List.css';


function List( {items , setItems} ) {
    const deleteItem = ( key ) => {
        const newList = items.filter( itemObj => {
            return itemObj.key !== key;
        })
        setItems(newList);
    }
    return (
        <div className="wrapper">
            { items.map( (itemObject) => {
                return (
                    <div className="list" key={ itemObject.key }>
                    <p> { itemObject.item } </p>
                    <button className = " btn btn-danger " onClick={ () => deleteItem( itemObject.key )}>Delete</button>
                    </div>
                )
            })}
        
        </div>
    )
}


export default List;