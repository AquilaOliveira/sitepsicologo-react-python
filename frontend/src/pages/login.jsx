function Login() {
    return (
      <>
        <h1>login</h1>
        <div className="body-login">
          
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nickName">Usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nickName"
                    placeholder="Usuário"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Senha"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </form>
              <p>Não é cadastrado? cadastre-se aqui</p>
            </div>
          </div>
        <footer></footer>
      </>
    );
}
export default Login