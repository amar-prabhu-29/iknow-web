import React,{Component} from 'react'
import Item from './Item'
class Categories extends Component{
    render(){
        const catNames = this.props.category
        const menuList = this.props.items
        const list = catNames.map(
            cN => <div>{cN.name}<Item items={menuList} parentCat={cN.name} /></div>)
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default Categories