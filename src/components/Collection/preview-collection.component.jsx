import React from "react";
import './preview-collection.styles.scss';
import CollectionItem from '../CollectionItem/collection-item.component';

const collectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
            <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map( result => (
                    <CollectionItem key={result.id} item={result} />
                ))
            }
            </div>
        <div className="preview"></div>
    </div>
)

export default collectionPreview;