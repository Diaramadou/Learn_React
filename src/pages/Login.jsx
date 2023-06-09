function Login(){
    return(
       <>
          <form className="form">
              <h3>Connexion</h3>
              <input type="email" name="email" className="form-control" placeholder="Enter un mail" /><br />
              <input type="password" name="password" className="form-control" placeholder="Entrer le mot de passe" /> <br />
              <button type="submit">Connexion</button>
          </form>
       
       </>
    )
}

export default Login