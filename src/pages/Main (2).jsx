import { useRef, useState } from 'react'
import { FilmApi } from '../api/api'
import { FilmItem } from '../components/FilmItem'
import LoaderGIF from '../assets/loader.gif'

const api = new FilmApi()

export const MainPage = ({
    collection,
    addToCollection,
    removeFromCollection
}) => {
    const inputRef = useRef(null)

    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(null)

    const getFilms = async () => {
        const { value } = inputRef.current

        if(value) {
            setLoading(true)

            const res = await api.getByTitle(value)

            if(res.d) setFilms(res.d)
            else setFilms([])

            setLoading(false)
        }
    }

    const onClickHandler = () => {
        if(inputRef.current) {
            getFilms()
        }
    }

    const onKeyDownHandler = (ev) => {
        if(ev.keyCode === 13) {
            getFilms()
        }
    }

    // const onChangeHandler = (ev) => {
    //     const { value } = ev.currentTarget
    //     const letterNumber = /^[0-9a-zA-Z]+$/

    //     if(!value.match(letterNumber)) ev.currentTarget.value = ''
    // }

    return (
        <div className='main-page'>
            <p>Попробуйте найти кино и добавить его в свою коллекцию</p>

            <div className='main-page__form'>
                <input ref={inputRef} onKeyDown={onKeyDownHandler} />

                <button onClick={onClickHandler}>
                    Поиск
                </button>
            </div>

            {
                loading && (
                    <div className='main-page__loader'>
                        <img src={LoaderGIF} width={200} />
                    </div>
                )
            }

            <div className='app-items-grid app-container' style={{ marginTop: 45 }}>
                {
                    (!!films.length && !loading) && (
                        films.map((item) => (
                            <FilmItem 
                                { ...item } 
                                key={item.id} 
                                isAdded={collection.find((i) => i.id === item.id)}
                                onAdd={() => addToCollection(item)}
                                onRemove={() => removeFromCollection(item.id)}
                            />
                        ))
                    )
                }
            </div>

            {
                (!films.length && loading === false) && (
                    <p style={{ textAlign: 'center' }}>
                        Ничего не найдено!
                    </p>
                )
            }
        </div>
    )
}