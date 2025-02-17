import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useFetch } from "../hooks/useFetch"
import "./Inici.css";

export default function Inici() {

  const {datos:receptes,cargando,error} = useFetch('http://localhost:3000/receptes');

  return (
    <div className="inici">
      <h2>Receptes</h2>
      {cargando && <div>Cargando... </div>}
      {error && <div>{error}</div>}
      {receptes && receptes.map(recepta => (
         <div key={recepta.id} className="card">
            <h3>{recepta.nom}</h3>
            <p>{recepta.autor}</p>
            <Link to={`/receptes/${recepta.id}`}>Ir al detalle de la recepta...</Link>
        </div>
  ))}
    </div>
  )
}
