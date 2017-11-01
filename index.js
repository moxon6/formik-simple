import _get from "lodash.get"
import _set from "lodash.set"
import { mapProps, compose } from "recompose"
import { withFormik } from "formik"

const addFormToProps = props => {
  const {values, setValues, errors} = props
  const newErrors = Object.keys(errors).reduce(
    (errs, key) => _set(errs, key, errors[key]), {}
  )
  return {
    ...props,
    form: {
      $: name => ({
        name,
        value: _get(values, name),
        onChange: e => setValues(_set(values, name, e.target.value)),
        error:  _get(newErrors, name)
      }),
      values,
      errors
    }
  }
}

export default args => compose(
  withFormik(args),
  mapProps(addFormToProps)
)

