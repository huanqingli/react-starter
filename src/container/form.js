/**
 * Created by Muc on 17/6/16.
 */
import { connect } from 'react-redux'

import {
  changeFirstName,
  changeLastName,
  changeEmail,
  submit,
} from '../action/form'

import FormPage from '../page/form'

const mapStateToProps = state => ({
  form: state.form,
})

const mapDispatchToProps = dispatch => ({
  handleChangeF: (e) => { dispatch(changeFirstName(e.target.value)) },
  handleChangeL: (e) => { dispatch(changeLastName(e.target.value)) },
  handleChangeE: (e) => { dispatch(changeEmail(e.target.value)) },
  handleSubmit: user => (e) => {
    e.preventDefault()
    return dispatch(submit(user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)
