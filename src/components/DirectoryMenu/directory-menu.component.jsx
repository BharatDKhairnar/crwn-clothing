import React from 'react'
import './directory-menu.styles.scss'
import MenuItem from '../MenuItem/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="directory-menu">
                <MenuItem />
            </div>
        )
    }
}

export default Directory;