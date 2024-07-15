import { Link } from 'react-router-dom';
import LoadingComponent from '../module/loading.js';
import useDynamicCss from '../hooks/useDynamicCss.js'

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const password = formData.get('password');
    const passwordCheck = formData.get('password_check');
    const name = formData.get('name');
    const phone = formData.get('phone');

    console.log('ID:', id);
    console.log('Password:', password);
    console.log('Password Check:', passwordCheck);
    console.log('Name:', name);
    console.log('Phone Number:', phone);
};

function SignUp() {
    useDynamicCss('/assets/signUp.css');

    return (
        <div>
            <LoadingComponent name="./login.js"></LoadingComponent>
            <div className="login-container">
                <h2>SIGN-UP</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" name="id" required />
                    <div className="spacer1"></div>

                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="password_check">PASSWORD CHECK</label>
                    <input type="password" id="password_check" name="password_check" required />
                    <div className="spacer1"></div>

                    <label htmlFor="name">NAME</label>
                    <input type="text" id="name" name="name" required />
                    <div className="spacer1"></div>

                    <label htmlFor="phone">PHONE NUMBER</label>
                    <input type="tel" id="phone" name="phone" required />
                    <div className="spacer2"></div>

                    <Link to="/login" className="submit">submit</Link>
                    <div className="spacer2"></div>

                    <Link to="/login" className="login">login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;