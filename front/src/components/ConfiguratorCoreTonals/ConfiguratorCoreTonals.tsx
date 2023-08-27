import NewTonals from "./NewTonals/NewTonals"
import CurrentTonals from "./CurrentTonals/CurrentTonals"


const ConfiguratorCoreTonals: React.FC = () => {
    return (
        <div className='containerBSContainers'>
            <NewTonals />
            <CurrentTonals />
        </div>
    )
}

export default ConfiguratorCoreTonals