import React, { Component } from 'react'
import OrderDetails from './OrderDetails'
class Tables extends Component {
    state = {
        currentTable: 0
    }
    setActiveTable = (table) => {
        this.setState({
            currentTable: table 
        })   
    }
    render() {
        let activeHallTables = this.props.tables
        let displayTables = []
        activeHallTables.forEach(table =>{
            if(table.hall === this.props.hall && table.seated == true){
                displayTables.push(table)
            }
        })
        return (
            <div>
                {/* Variable activHallTables displayed Here*/}
                <OrderDetails table={this.state.currentTable} /> 
                {/* state variable currentTable must change whenever a table is clicked or selected. 
                USE METHOD setActiveTable*/}
            </div>
        )
    }
}

export default Tables