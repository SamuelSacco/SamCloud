const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to="/signup">sign up instead</Link>,
    }
}