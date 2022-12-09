import React from "react";
import SHOP_DATA from '../../js/shop.data.js';
import CollectionPreview from '../../components/Collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {

            collections: SHOP_DATA

        }
    }

    render() {
        return (<div>
            {
                this.state.collections.map( result => (

                    <CollectionPreview key={result.id} title={result.title} items={result.items} />
                ))
            }
        </div>)
    }

   
}

export default ShopPage;