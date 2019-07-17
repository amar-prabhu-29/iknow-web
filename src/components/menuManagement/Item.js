import React,{Component} from 'react'

class Item extends Component{
    render(){
        const items = this.props.items
        const parent = this.props.parentCat
        const listItems = items.map(i => {
            if(i.category === parent){
                return(
                    <div>
                        <div className="card horizontal">
                                    <div className="card-image" style={ {width:'130px'} }>
                                        <img src={i.imageURL} alt=""/>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{i.name}</p>
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