import "./login.css"
import Footer from "../../components/footer/Footer"
import fire from "../../config/fire"
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {

    let navigate = useNavigate();

    function login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        console.log(email);
        console.log(password);

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Succesfuly Logged In");
            })
            .catch((err) => {
                console.log("Error" + err.toString());
            })

    }

    return (
        <>
            <div className="login">
                <div className="loginHeader">
                    <img src="https://www.svgrepo.com/show/219683/battery.svg" alt="" />
                    <div className="loginBrand">Swap & Go</div>
                </div>
                <div className="loginBody">
                    <div className="loginContent">
                        <span className="loginTitle1">Sign In</span>
                        <span className="loginTitle2">Just a swap away!</span>
                        <form className="loginForm">
                            <label className="loginLabel">Email</label>
                            <input id="email" type="text" className="loginInput" placeholder="example@company.com" />
                            <label className="loginLabel">Password</label>
                            <input id="password" type="password" className="loginInput" />
                            <button onClick={() => { navigate("/home"); }} className="loginButton">Sign In <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                        </form>
                        <span className="loginRegister">Don't have an account? Register here.</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
