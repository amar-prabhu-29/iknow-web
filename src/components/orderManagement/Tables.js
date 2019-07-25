import React, { Component } from 'react'
import OrderDetails from './OrderDetails'
import TableImage from '../assets/Icon_Table.png'
class Tables extends Component {
    state = {
        currentTable: null,
    }
    setActiveTable = (ID) => {
        this.setState({
            currentTable: ID,
        })   
    }
    render() {
        let activeHallTables = this.props.tables
        let displayTables = []
        let tableCounter = 1
        activeHallTables.forEach(table =>{
            if(table.hall === this.props.hall && table.Seated == true){
                table.tableNO = tableCounter
                displayTables.push(table)
                tableCounter+=1
            }
            else if(table.hall === this.props.hall){
                tableCounter+=1
            }    
        })
        let tables = displayTables.map(table =>
            <div className="col l2">
                <span style={{color:'#CB212E'}}><b>{table.tableNO}</b></span>
                <img className="responsive-img" src={TableImage} onClick={() => {this.setActiveTable(table.OrderID)}} key={table.OrderID} />
            </div>
            
        )
        return ( 
            <div>
                <div className="row" style={{marginLeft: '20px',marginRight: '20px'}}>
                    {tables}
                </div>
                <br />
                <OrderDetails tables={displayTables} current={this.state.currentTable} /> 
            </div>
        )
    }
}

export default Tables