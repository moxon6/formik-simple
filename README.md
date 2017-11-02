# formik-simple

This is a very small wrapper around the formik HOC to make usage a little simpler

## Usage

Allows for usage in the following manner:

```
<Component {...form.$('fieldA')} />
```
Or for nested properties:
```
<Component {...form.$('fieldB.subField')} />
```
With the output in the shape
```
fieldA: 'fieldAValue',
fieldB:{
    subFieldC: 'subFieldCValue'
}
```

Errors (from yup validation) are also passed as props to the field components

See https://github.com/jaredpalmer/formik for withFormik API

Field pattern `form.$` based on https://github.com/foxhound87/mobx-react-form
