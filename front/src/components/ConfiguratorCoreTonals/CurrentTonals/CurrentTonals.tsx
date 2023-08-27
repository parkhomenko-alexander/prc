import { useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import s from './CurrentTonals.module.css'

const SkinPhotos: React.FC = () => {
    const state = useTypedSelector(state => state.tonalPhotos)


    useEffect(() => {
    }, [state.currentTonals])

    const setLoader = () => {
        return (
            <div className={s.ldsRing}><div></div><div></div><div></div><div></div></div>
        )
    }

    const setPhotos = () => {
        return (
            state.currentTonals.map((e, i) => {
                return (
                    <img src={e} className={s.image} key={i} alt="Фото базового тонального" />
                )
            })
        )
    }

    return (
        <div className='smallComponentContainer containerBSpadding-30px'>
            <div className={s.df}>
                <h3>Базовые средства</h3>
            </div>
            <div className='containerContent flex-jc-ai-center'>
                <div className={s.tonalsStrip}>
                    {state.isFetch ? setLoader() : setPhotos()}

                </div>
            </div>
            {/* <p className='flex-jc-ai-center'>{state.currentDate}</p> */}

        </div>
    )
}

export default SkinPhotos