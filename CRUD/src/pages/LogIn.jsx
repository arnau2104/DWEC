import React, { useState,useEffect } from 'react'
import './LogIn.css';
import { guardarUsuariAmbId,onSnapshot,collection,db } from '../firebase';
import { useNavigate} from 'react-router-dom';


export default function LogIn({usuariActiu,setUsuariActiu}) {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usuaris,setUsuaris] = useState([]);
    const [cargat, setCargat] = useState(false);
    const [missatge, setMissatge] = useState([0,'']);
    const navigate = useNavigate();

    // useEffect(()=> {
    //     console.log(usuariActiu);
    // },[usuariActiu])

    useEffect(()=>{
        onSnapshot(collection(db,"usuaris"),  (querySnapshot)=> {
            let array = [];   
         querySnapshot.forEach((doc) => {
                 const exercici = doc.data();
                 array.push([doc.id,exercici]);                 
         }    
       )
   
       array.sort((a,b) => +a[0] - +b[0]);
       setUsuaris(array);
       setCargat(true);
     });
    },[])
    
    const crearUsuari = (e)=> {
        e.preventDefault();

        if(cargat && username && password) {
            let lastId = usuaris.length > 0 ? +usuaris[usuaris.length - 1][0] : 0;
            console.log(lastId);
            let id = lastId + 1;
            console.log(typeof id);
            try {
                 guardarUsuariAmbId(id + "",username,password);
                setMissatge([0,"Registrat Correctament!"])
                
                setTimeout(()=>{

                    navigate('/');
                    setUsuariActiu([`${id}`,[{username,password}]]);
                    // console.log(usuariActiu);
                    setUsername('');
                    setPassword('');
                    setMissatge([0,''])
                }, 2000);

            }catch(e) {
                setMissatge([1,"Error al registrarse!"])
            }      
           

        }else {
            setMissatge([1,'Es necessari omplir tots els camps!'])
        }
    }
    return (
   <div>
    <form className='logIn-form' name='logIn-form' >
        <h2>Inciar Sessió</h2>
        <label>
            <span>Nom d'usuari</span>
            <input type="text" 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)} 
            />
        </label>

        <label>
            <span>Contrasenya</span>
            <input type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
        </label>

        <div className='btns-enviar'>
            <button className='enviar'>Incia Sessió</button>
            <button className='enviar' onClick={crearUsuari}>Crear Usuari</button>
        </div>


        {missatge[1] && <p className={missatge[0] == 0 ? 'correcta' : 'error'}>{missatge[1]}</p>}

    </form>
   </div>
    )
  }