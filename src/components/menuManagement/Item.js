import React,{Component} from 'react'
import EditModal from './EditModal'

class Item extends Component{
    render(){
        const items = this.props.items
        const parent = this.props.parentCat
        const deleteItem = this.props.deleteItem
        const listItems = items.map(i => {
            if(i.category === parent){
                return(
                    <div key={i.itemID}>
                        <div className="card horizontal">
                                    <div className="card-image" style={ {width:'130px'} }>
                                        <img src={i.imageURL} alt=""/>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{i.name}</p>
                                            <button className="btn btn-danger" onClick={() => {deleteItem(i.itemID)}}>Delete</button>
                                            <EditModal itemDetails={i}/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                )
            }
            return(
                null
            )
        })
        return(
            <div>
                {listItems}
            </div>
        )
    }
}

export default Item