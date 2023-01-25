import "./register.css"
import Footer from "../../components/footer/Footer"
import fire from "../../config/fire"
import { useNavigate } from "react-router-dom";



export default function Register() {

    let navigate = useNavigate();


    function signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Succesfuly Registered");
            })
            .catch((err) => {
                console.log("Error" + err.toString());
            })

    }

    return (
        <>
            <div className="register">
                <div className="registerHeader">
                    <img src="https://www.svgrepo.com/show/219683/battery.svg" alt="" />
                    <div className="registerBrand">Swap & Go</div>
                </div>
                <div className="registerBody">
                    <div className="registerContent">
                        <span className="registerTitle1">Register</span>
                        <span className="registerTitle2">Just a swap away!</span>
                        <form className="registerForm">
                            <label className="registerLabel">Email</label>
                            <input type="text" className="registerInput" placeholder="example@company.com" />
                            <label className="registerLabel">Name</label>
                            <input type="text" className="registerInput" />
                            <label className="registerLabel">Vehicle Registration No.</label>
                            <input type="text" className="registerInput" placeholder="e.g. MH46AY6969" />
                            <label className="registerLabel">Password</label>
                            <input type="password" className="registerInput" />
                            <button onClick={() => { navigate("/"); }} className="registerButton">Register <i className="fa-solid fa-user-plus"></i></button>
                        </form>
                        <span className="registerLogin">Already have an account? Sign In here.</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
