import {useLocation} from 'react-router-dom';

export default function Cuiners() {

  const query = useLocation().search
  console.log(query);
  const parametres = new URLSearchParams(query);

  const nom = parametres.get("nom");
  const restaurant = parametres.get("restaurant");

  return (
    <div>
      <h2>Cuiners</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis sapiente iste ut, saepe at, labore repellat modi quibusdam excepturi esse. Numquam quae tempore consectetur sint eum recusandae magnam? Voluptatum.</p>
    </div>
  )
}
