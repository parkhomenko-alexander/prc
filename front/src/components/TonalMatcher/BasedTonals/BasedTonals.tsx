import { useEffect } from 'react'
import { setConstantValue } from 'typescript'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { SkinPhotosState } from '../../../types/skinPhotos'
import s from './BasedTonals.module.css'

const SkinPhotos: React.FC = () => {
    const state = useTypedSelector(state => state.skinPhotos)
    let baseColors = <></>

    useEffect(() => {
        baseColors = getBaseTonals()
    }, [state.palette])

    const getBaseTonals = () => {
        let node = <></>
        if (state.palette === null) {
            return node
        }
        else {
            node = <div className={s.baseColors}>
                {state.palette.map((e, i) => {
                    const style = `rgb(${e[0]}, ${e[1]}, ${e[2]})`;
                    const tone = <div style={{ backgroundColor: style, width: '40px', height: '40px' }} key={i} className={s.color}></div>
                    return tone
                })}
            </div >
            return node
        }
    }

    const isFetchData = () => {
        if (state.isFetch) {
            return (
                <div className={s.ldsRing}><div></div><div></div><div></div><div></div></div>
            )
        }
        else if (state.skinTone && state.tonalColor) {
            return (
                <>
                    <div className={s.calculatedElement}>
                        <div>Цвет кожи</div>
                        <div className={s.mrTop10px} style={{
                            backgroundColor: `rgb(${state.skinTone[0]}, ${state.skinTone[1]}, ${state.skinTone[2]})`,
                            width: '100px', height: '40px'
                        }}></div>
                    </div>
                    <div className={s.calculatedElement}>
                        <div>Цвет средства</div>
                        <div className={s.mrTop10px} style={{
                            backgroundColor: `rgb(${state.tonalColor[0]}, ${state.tonalColor[1]}, ${state.tonalColor[2]})`,
                            width: '100px', height: '40px'
                        }}></div>
                    </div>
                    <div className={s.calculatedElement}>
                        <div>Количество средств</div>
                        <div className={s.mrTop10px}>
                            {state.amount?.map((e, i) => {
                                return <span className={s.marginSpan} key={i}>{e}</span>
                            })}
                        </div>

                    </div>
                    <div className={s.calculatedElement}>
                        <div>На 1 мл</div>
                        <div className={s.mrTop10px}>
                            {state.amount?.map((e, i) => {
                                return <span className={s.marginSpan} key={i}>{e}</span>
                            })}
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className='smallComponentContainer containerBSpadding-30px'>
            <div className={s.df_fdc}>
                <h3>Базовые средства</h3>
                {getBaseTonals()}
            </div>

            <div className='containerContent'>
                <div className={s.calculatedInfo}>
                    {isFetchData()}
                </div>

                <div className='flex-jc-ai-center'>
                    <label className="labelButton" >Произвести</label>
                </div>
            </div>

        </div>
    )
}

export default SkinPhotos