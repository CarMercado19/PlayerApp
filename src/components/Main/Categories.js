import React from 'react';
import Playlists from './Playlists';

const Categories = () => {
    const dataCategories = [
        {
            id: 1,
            name: 'Enfoque',
            tag: 'Música para no perder el foco.'
        },
        {
            id: 2,
            name: 'Estado de ánimo',
            tag: 'Playlists que se adaptan a tu humor.'
        },
        {
            id: 3,
            name: 'Nuevos lanzamientos populares',
            tag: ''
        },
        {
            id: 4,
            name: '¡Muévete con los éxitos de hoy!',
            tag: ''
        }
    ]

    return (
        <div>
            { dataCategories.map((category) => (
                <div className="cardsWrap">
                    <h2>{ category.name }</h2>
                    <p className="subText">{ category.tag }</p>
                    <Playlists categoryId={ category.id } />
                </div>
            ))}
        </div>
    );
}

export default Categories;
