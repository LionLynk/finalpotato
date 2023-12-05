import React from "react";
import '../css/habilidades.css';
/*imagenes */
import blender from '../img/3d logo.png';
import ae from '../img/aelogo.png';
import acad from '../img/autocadlogo.jpg';
import csslogo from '../img/csslogo.png';
import htmllogo from '../img/htmllogo.png';
import jslogo from '../img/jslogo.png';
import lua from '../img/lualogo.png';
import phplogo from '../img/phplogo.png';
import ps from '../img/pslogo.png';
import ra from '../img/ralogo.png';
/*imagenes */

 function Habilidades() {
    return(
    <div className="galeria-habilidades">
    <div className="img-galeria">
 <img src={blender} alt="Blender" />
    </div>
    <div className="img-galeria">
 <img src={ae} alt="After Efects" />
    </div>
    <div className="img-galeria">
 <img src={acad} alt="AutoCAD" />
    </div>
    <div className="img-galeria">
 <img src={csslogo} alt="CSS" />
    </div>
    <div className="img-galeria">
 <img src={jslogo} alt="JavaScript" />
    </div>
    <div className="img-galeria">
 <img src={htmllogo} alt="HTML" />
    </div>
    <div className="img-galeria">
 <img src={lua} alt="LUA" />
    </div>
    <div className="img-galeria">
 <img src={phplogo} alt="PHP" />
    </div>
    <div className="img-galeria">
 <img src={ps} alt="Photoshop" />
    </div>
    <div className="img-galeria">
 <img src={ra} alt="Realidad aumentada" />
    </div>
</div>
    )
 }
export default Habilidades;