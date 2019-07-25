import React, { Component } from 'react'
import OrderDetails from './OrderDetails'
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
        console.log("Called Render Tables")
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
            <button onClick={() => {this.setActiveTable(table.OrderID)}} className="btn" key={table.OrderID}>{table.tableNO}</button>
        )
        return ( 
            <div>
                {tables}
                <OrderDetails tables={displayTables} current={this.state.currentTable} /> 
            </div>
        )
    }
}

export default Tables