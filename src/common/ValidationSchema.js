import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Title too Short!').max(25, 'Title too Long!').required('Title Required'),

  price: Yup.number().min(1, 'Number too Short!').max(100000, 'Number is up to 100000!').required('Price Required'),

  description: Yup.string().min(6, 'Description too Short!').max(100, 'Description too Long!').required('Description Required'),

  categoryId: Yup.string().min(1, 'Category Id too Short!').max(1, 'Category Id too Long!').required('Category Id Required'),

  images: Yup.array().of(Yup.string()),
});

export { ValidationSchema };
