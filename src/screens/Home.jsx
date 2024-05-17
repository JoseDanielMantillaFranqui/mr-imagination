import { useNavigate } from "react-router-dom";
import '../App.css'
import { useImaginationContext } from "../hooks/useImaginationContext";
import { DiCodeBadge } from "react-icons/di";

const Home = () => {


    

    const { randomWallPaper, userPrompt, handleInputPromptUser, textareaChatRef, isEmptyUserPrompt, generateImg } = useImaginationContext()

    const navigate = useNavigate()

    const handleSubmitFormCreateImage = (e) => {
      e.preventDefault()
      if (isEmptyUserPrompt === false) return 

      generateImg()
      navigate('/response')
    }

    return <main className='main__container' style={{ backgroundImage: `url(${randomWallPaper})` }}>
        <div className='interface'>
            <div className='interface__window'>
                <div className='window__header'>
                    <img src='/window-icon.svg' className='window__icon' />
                    <h1 className='window__title'>Mr. Imagination</h1>
                </div>
                <img src='/window-image.png' className='window__image'></img>
                <form className='window__form' onSubmit={handleSubmitFormCreateImage}>
                    <textarea placeholder='Describe la imagen que quieres crear' cols='1' rows='1' className='form__input' ref={textareaChatRef} value={userPrompt} onChange={handleInputPromptUser} ></textarea>
                    <button className='form__button'>Crear Imagen</button>
                </form>
                <div className="window__footer">
                    Daniel Franqui
                    <DiCodeBadge />
                </div>       
            </div>           
        </div>
    </main>
}

export default Home