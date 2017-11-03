# formik-simple

This is a very small wrapper around the formik HOC to make usage a little simpler.

## Usage

Allows for usage in the following manner:

```jsx
<Component {...form.$('fieldA')} />
```
Or for nested properties:
```jsx
<Component {...form.$('fieldB.subField')} />
```
With values in the shape
```js
{
    fieldA: 'fieldAValue',
    fieldB:{
        subFieldC: 'subFieldCValue'
    }
}
```

Errors (from yup validation) are also passed as props to the field components


## See also
https://github.com/jaredpalmer/formik for withFormik API
Field pattern `form.$` based on https://github.com/foxhound87/mobx-react-form
