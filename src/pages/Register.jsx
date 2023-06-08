function Register()
{
  return(
    <>
       <div className="form" style={{width : "18rem"}}>
            <h3>Inscription</h3>
           <input type="text" className="form-control" placeholder="Nom" /><br />
           <input type="prenom" className="form-control" placeholder="Prenom" /> <br />
           <input type="email" className="form-control" placeholder="Enter un mail" /><br />
           <input type="password" className="form-control" placeholder="Entrer le mot de passe" /> <br />
           <button type="submit">Inscription</button>
       </div>
    </>
 )
}

export default Register