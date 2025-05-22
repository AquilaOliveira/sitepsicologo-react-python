import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Headerlimpo from "../components/Header/HeaderLimpo";

function Login() {
    return (
      <>
          <Headerlimpo id="headerlogin"></Headerlimpo>
          <div id="corpologin">
            <div className="body-login">
              <div className="card-body">
                <form className="formlogin">
                  <h1 id="loginh1">Login</h1>
                  <p>Faça login abaixo</p>
                  <div className="form-group">
                    <label id="loginlabel" htmlFor="nickName">
                      Usuário
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nickName"
                      placeholder="Usuário"
                    />
                  </div>
                  <div className="form-group">
                    <label id="loginlabel" htmlFor="password">
                      Senha
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Senha"
                    />
                  </div>
                  <button className="btn btn-primary">Entrar</button>
                </form>
                <p>
                  Não é cadastrado? <a href="/cadastro">cadastre-se aqui</a>
                </p>
              </div>
            </div>
          </div>
          <Footer id="footerlogin"></Footer>
      </>
    );
}
export default Login