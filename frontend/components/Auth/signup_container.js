import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {createNewUser} from '../../actions/session/session_actions';

const mapStateToProps = state => ({
    formType: 'Sign Up',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    Submit: (formUser) => dispatch(createNewUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);