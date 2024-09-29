import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../App.css'
import { useImaginationContext } from "../hooks/useImaginationContext";
import { FaRegSquareFull } from "react-icons/fa6";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoPhoneLandscapeSharp } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InitBar from "../components/InitBar";
import { VscChromeClose } from "react-icons/vsc";
import Draggable from 'react-draggable';
import zIndex from "@mui/material/styles/zIndex";
import { GoHistory } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import useDeviceType from "../hooks/useDeviceType";


const SelectLabel = styled(InputLabel)`
        && {
        color: rgb(0, 0, 0);
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 1.5rem;
        width: 70%;
        text-align: center;
        font-weight: 600;
        white-space: wrap;

        @media screen and (max-width: 480px) {
          text-align: left;
          margin-top: 0;
          font-size: 1.7rem;
          width: 100%;
      }

      @media screen and (min-width: 481px) and (max-width: 1000px) {
          text-align: left;
          margin-top: 0;
          width: 100%;
      }
    
        /* Cambia el color del label en su estado reducido */
        &.MuiInputLabel-shrink {
          color: rgba(0, 0, 0, 0.779);
          font-size: 1.3rem;
          margin-top: 0;
        }
      }
`

const SelectForm = styled(FormControl)`
  width: 34%;
  max-height: 130px;

  @media screen and (max-width: 480px) {
    width: 100%;
    min-height: max-content;
  }
`

const SelectStyleImg = styled(Select)`
        && {
        color: #000000;
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
        border-top: 2px inset white;
        border-left: 2px inset white;
        border-right: 2px inset black;
        border-bottom: 2px inset black;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.377);
        position: relative;
        border-radius: 0;
        height: 100%;
        &&:before {
          width: 100%;
    content: "";
    height: 100%;
    position: absolute;
    padding: 2px;
    top: -3px;
    left: -3px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
        }
        &:after {
          border-bottom: none;
        }
        &&:hover {
        border-bottom: 2px inset black;
        }
        &&:active {
          border-top: 2px inset gray;
        border-left: 2px inset gray;
        border-right: 2px inset #bcbcbc;
        border-bottom: 2px inset #bcbcbc;
        }
        &&:active:before {
            border-top: 1px solid black;
            border-left: 1px solid black;
            border-right: 1px solid white;
            border-bottom: 1px solid white;
        }
    
        .MuiSvgIcon-root {
          fill: rgb(0, 0, 0);
          align-self: center;
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
          border-top: 2px inset white;
          border-left: 2px inset white;
          border-right: 2px inset black;
          border-bottom: 2px inset black;
          font-style: italic;
          position: relative;

          &&:before {
          width: 100%;
    content: "";
    height: 100%;
    position: absolute;
    padding: 1px;
    top: -2px;
    left: -3px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
        }
          
        &:focus {
          background-color: #505050;
        }
        &:hover {
          background-color: #6a6868;
        }
        &&:active {
          border-top: 2px inset gray;
        border-left: 2px inset gray;
        border-right: 2px inset #a2a2a2;
        border-bottom: 2px inset #9e9e9e;
        }
        &&:active:before {
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

const WindowClose = styled(VscChromeClose)`
  font-size: 1.5rem;
  position: absolute;
  top: 5px;
  right: 5px;
  background: gray;
  color: black;
  border-top: 2px inset white;
  border-left: 2px inset white;
  border-right: 2px inset black;
  border-bottom: 2px inset black;
  cursor: pointer;
  z-index: 1;

  &:active {
    border-top: 2px inset rgb(135, 135, 135);
    border-left: 2px inset rgb(135, 135, 135);
    border-right: 2px inset rgb(161, 161, 161);
    border-bottom: 2px inset rgb(162, 162, 162);
  }

  &::before {
    width: 100%;
    content: "";
    height: 100%;
    position: relative;
    padding: 3px;
    top: -4px;
    left: -4px;
    z-index: 2;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`

const WindowCloseHistory = styled(WindowClose)`
  

  @media screen and (max-width: 481px) {
    top: 0.238rem;
  }
`

const WindowHistory = styled(GoHistory)`
   font-size: 1.5rem;
  position: absolute;
  top: 5px;
  right: 35px;
  background: gray;
  color: black;
  border-top: 2px inset white;
  border-left: 2px inset white;
  border-right: 2px inset black;
  border-bottom: 2px inset black;
  cursor: pointer;
  z-index: 1;

  &:active {
    border-top: 2px inset rgb(135, 135, 135);
    border-left: 2px inset rgb(135, 135, 135);
    border-right: 2px inset rgb(161, 161, 161);
    border-bottom: 2px inset rgb(162, 162, 162);
  }
`

const WindowDeleteImgHistory = styled(WindowClose)`
  top: inherit;
  right: inherit;
  font-size: 3rem;
  position: static;

  @media screen and (max-width: 481px) {
    font-size: 2rem;
  }
`

const WindowDownoloadImgHistory = styled(GoDownload)`
  font-size: 3rem;
  background: gray;
  color: black;
  border-top: 2px inset white;
  border-left: 2px inset white;
  border-right: 2px inset black;
  border-bottom: 2px inset black;
  cursor: pointer;
  z-index: 1;

  &:active {
    border-top: 2px inset rgb(135, 135, 135);
    border-left: 2px inset rgb(135, 135, 135);
    border-right: 2px inset rgb(161, 161, 161);
    border-bottom: 2px inset rgb(162, 162, 162);
  }

  @media screen and (max-width: 481px) {
    font-size: 2rem;
  }
`

const Home = () => {

    const { randomWallPaper, userPrompt, handleInputPromptUser, isEmptyUserPrompt, generateImg, styleImg, handleSelectStyleImg, handleAspectRatio, aspectRatio, showAlert, checkIsFormCompleted, showInterfaceWindow, handleCloseInterfaceWindow, showWindowHistory, handleOpenWindowHistory, handleCloseWindowHistory, history, eliminarItemHistory} = useImaginationContext()

    const navigate = useNavigate()

    const isLaptop = useDeviceType()

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
      checkIsFormCompleted()
      handleCloseInterfaceWindow()
      navigate('/response')
    }


    return <main className='main__container' style={{ backgroundImage: `url(${randomWallPaper})` }}>
        <div className={`interface ${isLaptop === true ? 'interface--laptop' : ''}`}>
            <Draggable handle=".window__header" bounds=".interface">
                <div className='interface__window' style={{display: showInterfaceWindow === true ? 'flex' : 'none'}}>
                <div className='window__header'>
                    <img src='https://i.gifer.com/yG.gif' className='window__icon' onContextMenu={(e) => e.preventDefault()} />
                    <h1 className='window__title'>Mr. Imagination</h1>
                    <WindowClose onClick={handleCloseInterfaceWindow} onTouchEnd={handleCloseInterfaceWindow}/>
                    <WindowHistory onClick={handleOpenWindowHistory} onTouchEnd={handleOpenWindowHistory}/>
                </div>
                <video src='/window-image.webm' className='window__image' onContextMenu={(e) => e.preventDefault()} autoPlay muted loop width="200" />
                <form className='window__form' onSubmit={handleSubmitFormCreateImage}>
                    <div className="form__input__container">
                      <textarea placeholder='Describe aquí la imagen que quieres crear' cols='1' rows='1' className='form__input' value={userPrompt} onChange={handleInputPromptUser} ></textarea>
                    </div>
                    <SelectForm variant='filled'>
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
                    </SelectForm>
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
                    <p className="footer__logo" data-text="<> Daniel Franqui </>">
                      <span aria-hidden="true">{ '<> Daniel Franqui </>'}</span>
                        { '<> Daniel Franqui </>'}
                      <span aria-hidden="true">{ '<> Daniel Franqui </>'}</span>
                    </p>
                </a>       
            </div>
            </Draggable>
            <Draggable handle=".window__header__history" bounds=".interface">
              <div className="interface_window_history" style={{display: `${showWindowHistory === true ? 'flex' : 'none'}`, top: `${showInterfaceWindow === true ? '-500px' : '12%'}`}}>
              <div className='window__header__history'>
                    <img src='https://i.gifer.com/yG.gif' className='window__icon' onContextMenu={(e) => e.preventDefault()} />
                    <h1 className='window__title__history'>Mr. Imagination {'(Historial)'}</h1>
                    <WindowCloseHistory onClick={handleCloseWindowHistory} onTouchEnd={handleCloseWindowHistory}/>
                </div>
                <ul className="window__image__container">
                {
                  history?.length > 0 ? history.map((items, index) => {
                    return <li className="window__image__item" key={index}>
                    <img src={items.link} className="window__image__img"/>
                    <div className="window__image__actionButtons__container">
                      <a className="window__image__download" href={items.link}>
                      <WindowDownoloadImgHistory />
                      </a>
                      <WindowDeleteImgHistory onClick={() => {eliminarItemHistory(items.id)}} onTouchEnd={() => {eliminarItemHistory(items.id)}}/>
                    </div>
                  </li>
                  }) : <p className="noHistoryMessage">
                    No se encontró nada en tu historial
                  </p>
                }

                </ul>
              </div>
            </Draggable>
        </div>
        <InitBar />         
    </main>
}

export default Home