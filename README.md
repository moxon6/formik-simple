# formik-simple

This is a very small wrapper around formik, 

Small wrapper HOC for formik
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

Errors (from yup validation) are also passed as props the relevant components


Based on API of https://github.com/foxhound87/mobx-react-form
