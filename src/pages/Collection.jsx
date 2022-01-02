import { FilmItem } from '../components/FilmItem'

export const CollectionPage = ({
    collection,
    addToCollection,
    removeFromCollection
}) => {
    return (
        <div className='c-page app-container'>
            <p className='c-page__title'>
                Моя коллекция ({ collection.length } шт.)
            </p>

            <div className='app-items-grid app-container' style={{ marginTop: 45 }}>
                {
                    (!!collection.length) ? (
                        collection.map((item) => (
                            <FilmItem
                                { ...item } 
                                key={item.id} 
                                isAdded={collection.find((i) => i.id === item.id)}
                                onAdd={() => addToCollection(item)}
                                onRemove={() => removeFromCollection(item.id)}
                            />
                        ))
                    )
                    : (
                        <p className='c-page__title' style={{ color: '#dcdcdc' }}>
                            Ваша коллекция пуста
                        </p>
                    )
                }
            </div>
        </div>
    )
}