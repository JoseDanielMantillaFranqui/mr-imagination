import { useNavigate } from "react-router-dom";
import '../App.css'
import '../App.scss'
import { useImaginationContext } from "../hooks/useImaginationContext";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {


    

    const { randomWallPaper, userPrompt, handleInputPromptUser, textareaChatRef, isEmptyUserPrompt, generateImg, styleImg, handleSelectStyleImg } = useImaginationContext()

    const navigate = useNavigate()

    const handleSubmitFormCreateImage = (e) => {
      e.preventDefault()
      if ((isEmptyUserPrompt === false) || (styleImg === '')) return 

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
                    <FormControl variant='filled' fullWidth>
                        <InputLabel id="demo-simple-select-label" className="style__select--label">Estilo de Imagen</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={styleImg}
                        label="Estilo de Imagen"
                        onChange={handleSelectStyleImg}
                        className="style__select"
                        >
                        <MenuItem className='style__select--item' value='anime'>Anime</MenuItem>
                        <MenuItem className='style__select--item' value='photographic'>Fotográfico</MenuItem>
                        <MenuItem className='style__select--item' value='digital-art'>Arte Digital</MenuItem>
                        <MenuItem className='style__select--item' value='comic-book'>Cómic</MenuItem>
                        <MenuItem className='style__select--item' value='fantasy-art'>Arte de fantasía</MenuItem>
                        <MenuItem className='style__select--item' value='analog-film'>Película analógica</MenuItem>
                        <MenuItem className='style__select--item' value='origami'>Origami</MenuItem>
                        <MenuItem className='style__select--item' value='line-art'>Arte lineal</MenuItem>
                        <MenuItem className='style__select--item' value='cinematic'>Cinematográfico</MenuItem>
                        <MenuItem className='style__select--item' value='3d-model'>Modelo 3D</MenuItem>
                        <MenuItem className='style__select--item' value='pixel-art'>Pixel Art</MenuItem>
                        <MenuItem className='style__select--item' value='texture'>Textura</MenuItem>
                        <MenuItem className='style__select--item' value='futuristic'>Futurista</MenuItem>
                        <MenuItem className='style__select--item' value='realism'>Realismo</MenuItem>
                        <MenuItem className='style__select--item' value='watercolor'>Acuarela</MenuItem>
                        <MenuItem className='style__select--item' value='photo-realistic'>Ultra realista</MenuItem>

                        </Select>
                    </FormControl>
                    <button style={{ color: ((isEmptyUserPrompt === false) || (styleImg === '')) ? '#00000053' : '#000', textShadow: ((isEmptyUserPrompt === false) || (styleImg === '')) ? '1px 1px 2px #cccaca5d' : 'none' }} className='form__button'>Crear Imagen</button>
                </form>
                <div className="window__footer">
                    <p className="footer__logo" data-text='<> Daniel Franqui </>'>
                        {'<> Daniel Franqui </>'}
                    </p>
                </div>       
            </div>           
        </div>
    </main>
}

export default Home