function Login(){
    return(
       <>
          <div className="form">
              <h3>Connexion</h3>
              <input type="email" className="form-control" placeholder="Enter un mail" /><br />
              <input type="password" className="form-control" placeholder="Entrer le mot de passe" /> <br />
              <button type="submit">Connexion</button>
          </div>
       
       </>
    )
}

export default Login