import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/photo.png";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return(
    <aside id="sidebar">
      <img src={ Avatar } alt="Usuario" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar;