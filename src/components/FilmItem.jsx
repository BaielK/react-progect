import { useState } from "react/cjs/react.development"

export const FilmItem = ({
    i,
    l,
    q,
    s,
    y,
    isAdded,
    onAdd,
    onRemove
}) => {
    const [hover, setHover] = useState(false)

    return (
        <div className='film-item'>
            {
                i && (
                    <div className='film-item__img'>
                        <img src={i.imageUrl} />
                    </div>
                )
            }

            <div className='film-item__dsc'>
                <div>
                    <span>
                        Название:
                    </span>

                    <p>{ l }</p>
                </div>

                <div>
                    <span>
                        Категория:
                    </span>

                    <p>{ q }</p>
                </div>

                <div>
                    <span>
                        Роли:
                    </span>

                    <p>{ s }</p>
                </div>

                <div>
                    <span>
                        Год выпуска:
                    </span>

                    <p>{ y }</p>
                </div>
            </div>

            <div className='film-item__btns'>
                {
                    !isAdded ? (
                        <button 
                            className='is-add'
                            onClick={onAdd}
                        >
                            Добавить
                        </button>
                    )
                    : (
                        <button 
                            className='is-disabled'
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={onRemove}
                        >
                            {
                                hover ? 'Удалить' : 'Добавлен'
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}