import React, { useContext } from 'react';

import CollectionPreview from '../collection/preview-collection.component';

import '../collection/preview-collection.styles.scss';

import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionsOverview = () => {
    const collections = useContext(CollectionsContext);
    return (
    <div className='collections-overview'>
        {
            collections.map( result => (
                <CollectionPreview key={result.id} title={result.title} items={result.items} />
            ))
        }
  </div>
)};

export default CollectionsOverview;