import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import './category.styles.scss';

import { connect } from "react-redux";

const CategoryPage = ({ match, collections }) => {
    const categoryId = match.params.categoryId;
    const COLLECTION_ID_MAP = {
        hats: 1,
        sneakers: 2,
        jackets: 3,
        womens: 4,
        mens: 5
    }
    const { title, items } = collections.find( item => item.id === COLLECTION_ID_MAP[categoryId]);
    return(
        <div className="category-page">
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ shop }) => ({
    collections: shop.collections
})

export default connect(mapStateToProps)(CategoryPage);