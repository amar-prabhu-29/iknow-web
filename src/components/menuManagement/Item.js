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
                                        <img src={i.imageURL} alt="" style={{'borderRadius': '5%'}}/>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content" style={{paddingBottom:0,paddingTop:0}}>
                                            <div className="row">
                                                <div className="col l10">
                                                    <p><b>{i.name}</b></p>
                                                    <p>{i.price} Rs.</p>
                                                    <p>{i.type}</p>
                                                </div>
                                                <div className="col l2">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <button className="btn red" onClick={() => {deleteItem(i.itemID)}}><i className="material-icons">delete_forever</i></button>
                                                                </td>
                                                                <td>
                                                                    <EditModal itemDetails={i}/>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        
                                                    </table>
                                                    
                                                    
                                                </div>
                                            </div>
                                            
                                            
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