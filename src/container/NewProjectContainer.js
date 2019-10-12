import { connect } from 'react-redux';
import NewProject from '../components/NewProject/NewProject';
import Cookie from 'js-cookie';
import { addMember } from '../actions';

const dispatchSubmitClick = dispatch => async() => {
  try {

  } catch(err) {
    console.error(err);
  }
};

const dispatchMemberFind = dispatch => async email => {
  try {
    const res = await fetch(`http://localhost:8080/api/users/${email}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${Cookie.get('token')}` }
    });

    const json = await res.json();
    dispatch(addMember(json.userData));
  } catch(err) {
    console.error(err);
  }
}

const mapStateToProps = state => ({
  user: state.newProject.user
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick: dispatchSubmitClick(dispatch),
  onMemberFind: dispatchMemberFind(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProject);
