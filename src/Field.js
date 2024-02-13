import icon from './loupe.png';
import { useNavigate } from "react-router";

export const Field = ({text, handleText, onFormSubmit}) => {
  const navigate = useNavigate();
    
    return (
        <div className="container-header">
          <div className="header-logo">
            <img className="logo" src="https://avatars.mds.yandex.net/i?id=2a00000179f493cca6c27200cead502d1752-4012839-images-thumbs&n=13" alt="logo" width="100px"/>
            <h1>DiamArt</h1>
          </div>
          <form className="input-button" onSubmit={onFormSubmit}>
            <input value={text} className="field" onChange={handleText} />
            <button className="loupe" onClick={() => {navigate('/shop')}}><img src={icon} width="30px" height="30px" alt="icon"/></button>
          </form>
        </div>
    )
}