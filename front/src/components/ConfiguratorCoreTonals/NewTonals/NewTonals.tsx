import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import s from './NewTonals.module.css'

const SkinPhotos: React.FC = () => {
    const state = useTypedSelector(state => state.tonalPhotos)
    const { selectTonals, uploadNewTonals } = useActions()


    const containerInner = (photos = state.newTonals) => {
        if (photos.length === 0) {
            return <div>Изображения средств не выбраны</div>
        }
        else {
            const photosElements = <div className={s.photosStrip}>
                {Object.values(photos).map((e, i) => {
                    return (
                        <img src={URL.createObjectURL(e)} className={s.image} key={i} alt="Фото кожи" />
                    )
                })}
            </div>

            return photosElements
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)
        const ph = Array.from(e.target.files || [])
        selectTonals(ph)
    }

    const handleUploadCLick = () => {
        if (state.newTonals.length === 0) {
            return
        }
        else {
            uploadNewTonals(state.newTonals)
        }
    }

    return (
        <div className='bigComponentContainer containerBSpadding-30px'>
            <div className={s.header}>
                <div className="title">
                    <h3 >Загрузка базовых средств</h3>
                </div>
                <label htmlFor="file" className="labelButton">Выбрать</label>
            </div>

            <div className='containerContent flex-jc-ai-center'>
                {containerInner()}
                <input type="file" multiple onChange={handleChange} accept="image/png, image/jpg, image/jpeg" name="file" id="file" className={s.inputfile} />
            </div>

            <div className='flex-jc-ai-center'>
                <label className="labelButton" onClick={handleUploadCLick}>Загрузить</label>
            </div>
        </div>
    )
}

export default SkinPhotos