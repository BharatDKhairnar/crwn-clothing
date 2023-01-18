import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection/preview-collection.component';

import '../collection/preview-collection.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
        {
            collections.map( result => (
                <CollectionPreview key={result.id} title={result.title} items={result.items} />
            ))
        }
  </div>
);

const mapStateToProps = ({ shop }) => ({
    collections: shop.collections
})


export default connect(mapStateToProps)(CollectionsOverview);