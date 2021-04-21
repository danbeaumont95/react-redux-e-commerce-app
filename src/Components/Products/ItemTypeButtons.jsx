import React, { Component } from 'react';
import * as api from '../../api'

export default class ItemTypeButtons extends Component {
    state={
        allProds: [],
        isLoading: true,
        itemTypes: []
    };
    componentDidMount() {
        this.fetchAllProductTypes()
    }
    render() {
        const { itemTypes, isLoading } = this.state
        if (isLoading) return <p>Loading...</p>

        return (
            <div>
                {itemTypes.map((type) => {
                    return (
                        <button>{type}</button>
                    )
                })}
            </div>
        )
    }


    // fetchAllProducts = () => {
    //     api.getAllProducts().then((allProds) => {
    //         this.setState({ allProds, isLoading: false })
    //     })
    // }

    fetchAllProductTypes = () => {
        api.getAllProductTypes().then((itemTypes) => {
            this.setState({ itemTypes, isLoading: false })
        })
    }


}