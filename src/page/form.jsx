import Input from '../component/input'

const FormPage = ({ handleSubmit, form, handleChangeF, handleChangeL, handleChangeE }) => <form onSubmit={handleSubmit(form)} >
  {[{ label: 'First Name', name: 'firstName', placeholder: 'First Name', value: form.get('firstName'), handleChange: handleChangeF },
    { label: 'Last Name', name: 'lastName', placeholder: 'Last Name', value: form.get('lastName'), handleChange: handleChangeL },
    { label: 'Email', name: 'email', placeholder: 'Email', value: form.get('email'), handleChange: handleChangeE }].map(
      item => <Input info={item} />,
  )}
  <div>
    <button type="submit" >Submit</button>
  </div>
</form>

export default FormPage
