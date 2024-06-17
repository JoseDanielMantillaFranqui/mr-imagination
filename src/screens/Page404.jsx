import { TbError404 } from "react-icons/tb"
import { AiOutlineRollback } from "react-icons/ai"
import InitBar from "../components/InitBar"
import Draggable from 'react-draggable';
import { useEffect } from "react";

const Page404 = () => {
    useEffect(() => {
        
    },[])
    return <main className='main__container' style={{ backgroundImage: `url('https://i.gifer.com/y7.gif')`, backgroundRepeat: 'repeat', backgroundSize: 250 }}>
    <div className='interface' style={{justifyContent: 'center'}}>
        <Draggable handle=".window__header--error" bounds=".interface">
            <div className='interface__window'>
                <div className='window__header--error'>
                    <img src='https://cdn-icons-png.flaticon.com/512/6514/6514954.png' className='alert__icon' />
                    <h1 className='alert__title'>Recurso no encontrado</h1>
                </div>
                <div className="window__response">
                        <div className="window__response--loading">
                            <p className="page404__icon">404</p>
                        </div>
                        <a href={'/'} className="response__button--back">Volver <AiOutlineRollback /></a>
                </div>       
            </div>  
        </Draggable>         
    </div>
    <InitBar />
</main>
}

export default Page404