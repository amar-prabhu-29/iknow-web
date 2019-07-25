import React from 'react'


class Categories extends React.Component {    
    render(){
        const {content, changeCurrentCat} = this.props
        const categoryList = content.map(
            cN => <li key={cN.id}><a onClick={() => {changeCurrentCat(cN.name,cN.id)}}><b>{cN.name}</b></a></li>            
        )
        return(
            <nav className="categories-nav" style={{border:'1px solid #CB212E'}}>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        {categoryList}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Categories