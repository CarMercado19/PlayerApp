import React from 'react';
import { ReactComponent as PlayIcon } from '../svg/play.svg';

const Playlists = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            categoryId: 3,
            name: 'Nuevo playlist 1',
            img: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
            des: 'Lorem impus'
        },
        {
            id: 102,
            categoryId: 3,
            name: 'Nuevo playlist 2',
            img: 'https://images.unsplash.com/photo-1632285202174-b3ec7e28de92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            des: 'Lorem impus'
        },
        {
            id: 103,
            categoryId: 3,
            name: 'Nuevo playlist 3',
            img: 'https://images.unsplash.com/photo-1632239336383-5bfb856151f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
            des: 'Lorem impus'
        },
        {
            id: 104,
            categoryId: 1,
            name: 'Enfoque playlist 1',
            img: 'https://images.unsplash.com/photo-1565053266993-18ae409835ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            des: 'Lorem impus'
        },
        {
            id: 105,
            categoryId: 4,
            name: 'Muevete playlist 1',
            img: 'https://images.unsplash.com/photo-1628191013085-990d39ec25b8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            des: 'Lorem impus'
        },
        {
            id: 106,
            categoryId: 2,
            name: 'Ánimo playlist 1',
            img: 'https://images.unsplash.com/photo-1632301497603-33fb3d7afdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            des: 'Lorem impus'
        },
        {
            id: 107,
            categoryId: 2,
            name: 'Ánimo playlist 2',
            img: 'https://images.unsplash.com/photo-1632017753885-8aaabc04efa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            des: 'Lorem impus'
        }
    ]

    const matchedPlaylists = dataPlaylists.filter((playlist) => playlist.categoryId === props.categoryId)

    return (
        <div className="cardsWrapInner">
            { matchedPlaylists.map((playlist) => (
                <div className="card">
                    <div className="cardImg">
                        <img src={ playlist.img } alt="Pic 1" />
                        <div className="playIcon">
                            <PlayIcon />
                        </div>
                    </div>
                    <div className="cardContent">
                        <h3>{ playlist.name }</h3>
                        <span>{ playlist.des }</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Playlists;