import { TbError404 } from "react-icons/tb"
import { AiOutlineRollback } from "react-icons/ai"

const Page404 = () => {
    return <main className='main__container' style={{ backgroundImage: `url('https://i.gifer.com/y7.gif')`, backgroundRepeat: 'repeat', backgroundSize: 250 }}>
    <div className='interface' style={{ padding: '20rem 0' }}>
        <div className='interface__window'>
            <div className='window__header'>
                <img src='https://i.gifer.com/yG.gif' className='window__icon' />
                <h1 className='window__title'>Mr. Imagination</h1>
            </div>
            <div className="window__response">
                    <div className="window__response--loading">
                        <TbError404 className="loading__icon" style={{fontSize: '10rem'}}/>
                    </div>
                    <a href={'/'} className="response__button--back">Volver <AiOutlineRollback /></a>
            </div>       
        </div>           
    </div>
</main>
}

export default Page404