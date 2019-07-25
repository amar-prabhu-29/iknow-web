import React,{Component} from 'react'
import firebase from '../../config/fbConfig'
import Tables from './Tables'

class DinerHalls extends Component{
    state = {
        location: this.props.locationID,
        currentHall : 'Non AC',
        allHalls : [],
        allTables: []
    }
    componentDidMount(){
        let allHalls = []
        let allTables = []
        const dinerHalls = firebase.database().ref('Location/'+this.state.location+'/');
        dinerHalls.on('value',(snapshot) => {
            allHalls = []
            allTables = []
            snapshot.forEach(diners => {
                allHalls.push(diners.key)
                diners.forEach(tables => {
                    tables.forEach(table => {
                        const curTable = {...table.val(),'hall':diners.key}
                        allTables.push(curTable)
                    })
                })
            })
            this.setState({
                allHalls: allHalls,
                allTables: allTables
            })
        })
    }
    render(){
        console.log("Called Render")
        return(
        <div>
            <Tables tables={this.state.allTables} hall={this.state.currentHall} />
        </div>
        )
    }

}

export default DinerHalls