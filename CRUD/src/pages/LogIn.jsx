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
                    setUsuariActiu([`${id}`,{username,password}]);
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

    const iniciarSessio = (e)=> {
        e.preventDefault();

        onSnapshot(collection(db,"usuaris"),  (querySnapshot)=> {
           let logIn = false;  
           let usuariTrobat = null
         querySnapshot.forEach(async (doc) => {
                const usuari = doc.data();
                // console.log(usuari.username , username , usuari.password ,password)
                if(usuari.username == username && usuari.password == password) {
                     logIn = true;
                    setMissatge([0, 'Sessió Iniciada correctament!']);
                    usuariTrobat = [`${doc.id}`,usuari];
                    //  console.log(usuariActiu)
                    
                    
                    
                }           
         }
       
       )

       if(logIn) {
       
            setUsuariActiu(usuariTrobat);
            
        setTimeout(()=> {
            
            navigate('/');

        },2000)
       }else {
         setMissatge([1, 'Usuari o Contrassenya incorrecte!!'])
       }
   
      
     });
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
            <button className='enviar iniciar-sessio' onClick={iniciarSessio}>Incia Sessió</button>
            <button className='enviar crear-usuari' onClick={crearUsuari}>Registrarse</button>
        </div>


        {missatge[1] && <p className={missatge[0] == 0 ? 'correcta' : 'error'}>{missatge[1]}</p>}

    </form>
   </div>
    )
  }