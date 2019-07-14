import React,{Component} from 'react'

class Item extends Component{
    render(){
        console.log(this.props)
        const items = this.props.items
        const parent = this.props.parentCat
        const listItems = items.map(i => {
            if(i.category === parent){
                return(
                    <div>
                        {i.name}
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