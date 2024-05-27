import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../App.css'
import '../App.scss'
import { useImaginationContext } from "../hooks/useImaginationContext";
import { FaRegSquareFull } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoPhoneLandscapeSharp } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectLabel = styled(InputLabel)`
        && {
        color: rgb(0, 0, 0);
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size:1.8rem;
        font-weight: 600;
    
        /* Cambia el color del label en su estado reducido */
        &.MuiInputLabel-shrink {
          color: rgba(0, 0, 0, 0.779);
          font-size: 1.3rem;
        }
      }
`

const SelectStyleImg = styled(Select)`
        && {
        color: #000000;
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
        border-top: 1px solid white;
        border-left: 1px solid white;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.377);
        border-radius: 0;
        &:before {
          border-bottom: none;
        }
        &:after {
          border-bottom: none;
        }
        &:hover {
          border-bottom: none;
        }
        &:active {
            border-top: 1px solid black;
            border-left: 1px solid black;
            border-right: 1px solid white;
            border-bottom: 1px solid white;
        }
    
        .MuiSvgIcon-root {
          fill: rgb(0, 0, 0);
        }
      }
`

const SelectItem = styled(MenuItem)`
    && {
        background-color: #828080;
        color: #000000; 
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.377);
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.5rem;
          border-top: 1px solid white;
          border-left: 1px solid white;
          border-right: 1px solid black;
          border-bottom: 1px solid black;
          font-style: italic;
        &:focus {
          background-color: #505050;
        }
        &:hover {
          background-color: #6a6868;
        }
        &:active {
          border-top: 1px solid black;
          border-left: 1px solid black;
          border-right: 1px solid white;
          border-bottom: 1px solid white;
        }
        &.Mui-selected {
          background-color: rgb(78, 78, 78) !important;
        }
        &.MuiList-root {
          background-color: #212121;
        }
}
`

const Home = () => {


    

    const { randomWallPaper, userPrompt, handleInputPromptUser, textareaChatRef, isEmptyUserPrompt, generateImg, styleImg, handleSelectStyleImg, handleAspectRatio, aspectRatio, showAlert } = useImaginationContext()

    const navigate = useNavigate()

    const handleSubmitFormCreateImage = (e) => {
      e.preventDefault()
      if (isEmptyUserPrompt === false) {
        showAlert('Debes <p>describir la imagen</p> que quieres crear');
        return;
      }
    
      if (styleImg === '') {
        showAlert('Debes seleccionar un <p>estilo de imagen</p>');
        return;
      }
    
      if (aspectRatio === '') {
        showAlert('Debes seleccionar una <p>relación de aspecto</p>');
        return;
      }

      generateImg()
      navigate('/response')
    }

    return <main className='main__container' style={{ backgroundImage: `url(${randomWallPaper})` }}>
        <div className='interface'>
            <div className='interface__window'>
                <div className='window__header'>
                    <img src='https://i.gifer.com/yG.gif' className='window__icon' />
                    <h1 className='window__title'>Mr. Imagination</h1>
                </div>
                <img src='/window-image.png' className='window__image'></img>
                <form className='window__form' onSubmit={handleSubmitFormCreateImage}>
                    <textarea placeholder='Describe aquí la imagen que quieres crear' cols='1' rows='1' className='form__input' ref={textareaChatRef} value={userPrompt} onChange={handleInputPromptUser} ></textarea>
                    <FormControl variant='filled' fullWidth>
                        <SelectLabel id="demo-simple-select-label" className="style__select--label">Estilo de Imagen</SelectLabel>
                        <SelectStyleImg
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={styleImg}
                        label="Estilo de Imagen"
                        onChange={handleSelectStyleImg}
                        className="style__select"
                        >
                        <SelectItem className='style__select--item' value='anime'>Anime</SelectItem>
                        <SelectItem className='style__select--item' value='photographic'>Fotográfico</SelectItem>
                        <SelectItem className='style__select--item' value='digital-art'>Arte Digital</SelectItem> 
                        <SelectItem className='style__select--item' value='comic-book'>Cómic</SelectItem>
                        <SelectItem className='style__select--item' value='fantasy-art'>Arte de fantasía</SelectItem>
                        <SelectItem className='style__select--item' value='analog-film'>Película analógica</SelectItem>
                        <SelectItem className='style__select--item' value='origami'>Origami</SelectItem>
                        <SelectItem className='style__select--item' value='line-art'>Arte lineal</SelectItem>
                        <SelectItem className='style__select--item' value='cinematic'>Cinematográfico</SelectItem>
                        <SelectItem className='style__select--item' value='3d-model'>Modelo 3D</SelectItem>
                        <SelectItem className='style__select--item' value='pixel-art'>Pixel Art</SelectItem>
                        <SelectItem className='style__select--item' value='texture'>Textura</SelectItem>
                        <SelectItem className='style__select--item' value='futuristic'>Futurista</SelectItem>
                        <SelectItem className='style__select--item' value='realism'>Realismo</SelectItem>
                        <SelectItem className='style__select--item' value='watercolor'>Acuarela</SelectItem>
                        <SelectItem className='style__select--item' value='photorealistic'>Ultra realista</SelectItem>

                        </SelectStyleImg>
                    </FormControl>
                    <div className="aspectRatio__container">
                      <h2 className="aspectRatio__title">Relación de aspecto:</h2>
                      <div className="aspectRatio__buttons"> 
                        <div className={`aspectRatio__button ${aspectRatio === 'square' ? 'aspectRatio__button--selected' : ''}`} onClick={() => { handleAspectRatio('square') }}><FaRegSquareFull /></div>
                        <div className={`aspectRatio__button ${aspectRatio === 'portrait' ? 'aspectRatio__button--selected' : ''}`} onClick={() => { handleAspectRatio('portrait') }}><IoPhonePortraitSharp /></div>
                        <div className={`aspectRatio__button ${aspectRatio === 'landscape' ? 'aspectRatio__button--selected' : ''}`} onClick={() => { handleAspectRatio('landscape') }}><IoPhoneLandscapeSharp /></div>
                      </div>
                    </div>
                    <button type="submit" style={{ color: ((isEmptyUserPrompt === false) || (styleImg === '') || (aspectRatio === '')) ? '#00000053' : '#000', textShadow: ((isEmptyUserPrompt === false) || (styleImg === '') || (aspectRatio === '')) ? '1px 1px 2px #cccaca5d' : 'none' }} className='form__button'>Crear Imagen</button>
                </form>
                <a href="https://daniels-portafolio.vercel.app/" className="window__footer">
                    <p className="footer__logo" data-text='<> Daniel Franqui </>'>
                        {'<> Daniel Franqui </>'}
                    </p>
                </a>       
            </div>           
        </div>
    </main>
}

export default Home