import React, { Component } from 'react'
import Orders from './OrderDetails'
class Tables extends Component {
    state = {
        currentTable: null
    }
    setActiveTable = (table) => {
        this.setState({
            currentTable: table  //Replace activeHallTables[0] with parameter table after implementation
        })
        
    }
    render() {
        let activeHallTables = this.props.tables
        .filter(table => table.hall === this.props.hall)
        .map(table => {
            return (table);    {/* Style This Line For Tables inside the return statement  */}
        })
        this.setActiveTable(activeHallTables[0]);   {/* Remove this line after Implementation of Click Table to change State */}
        return (
            <div>
                {/* Variable activHallTables displayed Here*/}
                <Orders table={this.state.currentTable} /> 
                {/* state variable currentTable must change whenever a table is clicked or selected. 
                USE METHOD setActiveTable AS IMPLEMENTED ON LINE 19 */}
            </div>
        )
    }
}

export default Tables