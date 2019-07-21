import React,{Component} from 'react'
import firebase from '../../config/fbConfig'
import Tables from './Tables'

class DinerHalls extends Component{
    state = {
        location:'BRkK33lNs7mFaalnr0Dn',
        currentHall : 'AC',
        allHalls : [],
        allTables: []
    }
    componentDidMount(){
        let allHalls = []
        let allTables = []
        const dinerHalls = firebase.database().ref('Location/BRkK33lNs7mFaalnr0Dn/');
        dinerHalls.on('value',(snapshot) => {
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
        return(
        <div>
            <Tables tables={this.state.allTables} hall={this.state.currentHall} />
        </div>
        )
    }

}

export default DinerHalls