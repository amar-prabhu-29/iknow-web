import React from 'react'


class Categories extends React.Component {    
    render(){
        const {content, changeCurrentCat} = this.props
        const categoryList = content.map(
            cN => <li><a onClick={() => {changeCurrentCat(cN.name)}}>{cN.name}</a></li>            
        )
        return(
            
            <nav className="categories-nav">
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