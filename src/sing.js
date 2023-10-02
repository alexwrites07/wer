import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignInAdmin';
import SignUp from './components/auth/SignUpAgent';
import AuthDetails from './components/AuthDetailsAdmin';

function Ap() {
  return (
 <div className="Ap">
<SignIn />
<SignUp />
<AuthDetails />
</div>
  );
}

export default Ap;
