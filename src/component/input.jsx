const Input = ({ info }) => <div>
  <label htmlFor={info.name}>{info.label}</label>
  <div>
    <input name={info.name} type="text" placeholder={info.placeholder} onChange={info.handleChange} value={info.value} />
  </div>
</div>

export default Input
