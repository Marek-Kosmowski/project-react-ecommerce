// import {auth, } from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
const Authentication = () => {
  // wherever you make a call to the database it is going to be asynchronous

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
