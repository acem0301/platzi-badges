import React from "react";
import confLogo from "../images/badge-header.svg";
class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo Conferencia" />
        </div>

        <div>
          <h1>
            Adriana <br /> Estigarribia
          </h1>
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <p>FrontEnd Engineer</p>
          <p>@acem0301</p>
        </div>

        <div>#platziConxf</div>
      </div>
    );
  }
}

export default Badge;
