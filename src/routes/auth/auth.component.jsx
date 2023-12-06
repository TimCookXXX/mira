import SignInForm from "../../components/signIn-form/signIn-form.component";
import SignUpForm from "../../components/signUp-form/signUp-form.component";
import "./auth.styles.scss";

const Auth = () => {
    return (
        <div className="auth-container">
            <SignUpForm />
            <SignInForm />
        </div>
    );
};
export default Auth;
