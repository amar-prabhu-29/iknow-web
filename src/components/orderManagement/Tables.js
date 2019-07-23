import React, { Component } from 'react'
import Orders from './OrderDetails'
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
        .filter(table => table.hall === this.props.hall)
        .map(table => {
            return (table);    {/* Style This Line For Tables inside the return statement  */}
        })
        return (
            <div>
                {/* Variable activHallTables displayed Here*/}
                <Orders table={this.state.currentTable} /> 
                {/* state variable currentTable must change whenever a table is clicked or selected. 
                USE METHOD setActiveTable*/}
            </div>
        )
    }
}

export default Tables