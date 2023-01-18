import React from 'react'
import './directory-menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';

const Directory = ({ sections }) => {
      return (
          <div className="directory-menu">
              { 
                  sections.map(section => (
                      <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                  ))
              }
          </div>
      )
}

const mapStateToProps = ({ directory }) => ({
  sections: directory.sections
})

export default connect(mapStateToProps)(Directory);