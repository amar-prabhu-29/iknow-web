import React, { Component } from 'react'
import Orders from './OrderDetails'
class Tables extends Component {
    state = {
        currentTable: null
    }
    render() {
        let activeHallTables = this.props.tables
        .filter(table => table.hall === this.props.hall)
        .map(table => {
                return (table);    {/* Style This Line For Tables inside the return statement  */}
        })
        return (
            <div>
                {activeHallTables} 
                <Orders table={this.state.currentTable} /> {/* state variable currentTable must change whenever a table is clicked or selected.  */}
            </div>
        )
    }
}

export default Tables