import React,{Component} from 'react'
import EditModal from './EditModal'
import M from 'materialize-css'
class Item extends Component{
    componentDidUpdate(){
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    }
    render(){
        const spreadOptions = (options) => {
            return (
                options.map(o =>
                    <div className="row" style={{marginBottom: 0}}>
                        <div className="col l6">
                            {o.Name}
                        </div>
                        <div className="col l6">
                            {o.Price}
                        </div>
                    </div>
                )
            )
        }
        const items = this.props.items
        const parent = this.props.parentCat
        const deleteItem = this.props.deleteItem
        const listItems = items.map(i => {
            if(i.category === parent){
                let custNames = <div className="row" style={{marginBottom: 0}}>
                <div className="col l3">
                    NA
                </div>
                <div className="col l9">
                    <div className="row" style={{marginBottom: 0}}>
                        <div className="col l6">
                            NA
                        </div>
                        <div className="col l6">
                            NA
                        </div>
                    </div>
                </div>
            </div>
                if(i.customizations.length != 0){
                    custNames = i.customizations.map(cust => 
                        <div className="row" style={{marginBottom: 0}}>
                            <div className="col l3">
                                {typeof cust.Name === 'undefined'?"NA":cust.Name}
                            </div>
                            <div className="col l9">
                                {spreadOptions(cust.Options)}
                            </div>
                        </div>
                    )
                }
                return(
                    <div key={i.itemID}>
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header" style={{padding:0}}>
                                    <div className="row" style={{margin:0}}>
                                        <div className="col l3">
                                            <div style={{margin:'5px'}}>
                                                <img className="responsive-img" src={i.imageURL} alt="" style={{'borderRadius': '5%'}}/>
                                            </div>
                                        </div>
                                        <div className="col l6">
                                            <h5 style={{margin:'10px 0px 0px 0px'}}>{i.name}</h5>
                                            <p style={{margin:'5px 0px 0px 0px'}}><small>{i.type}</small></p>
                                        </div>
                                        <div className="col l3">
                                            <div style={{float:'right'}}>
                                                <h6><b>{i.price} Rs.</b></h6>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                <div className="collapsible-body">
                                    <div>
                                        <div className="row" style={{marginBottom: 0}}>
                                            <div className="col l3">
                                                <b>Add On Type</b>
                                            </div>
                                            <div className="col l9">
                                                <div className="row" style={{marginBottom: 0}}>
                                                    <div className="col l6">
                                                        <b>Add On Name</b>
                                                    </div>
                                                    <div className="col l6">
                                                        <b>Add On Price</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {custNames}
                                        <br />
                                    </div>
                                    <span style={{float:'left'}}>
                                        <EditModal itemDetails={i}/>
                                    </span>
                                    <span style={{float:'right'}}>
                                        <button className="btn red" onClick={() => {deleteItem(i.itemID)}}><i className="material-icons">delete_forever</i></button>
                                    </span>
                                    <br />
                                </div>
                            </li>
                        </ul>
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