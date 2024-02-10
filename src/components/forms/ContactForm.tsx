import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input, Stack } from '@mui/material'
import { Button } from '@mui/material'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'

export function SuccessAlert() {
  return (
    <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
      Message sent successfully.We will get back to you shortly.
    </Alert>
  )
}
let submit = false

type Inputs = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const schema = yup
  .object({
    firstName: yup.string().required('Must provide first name.'),
    lastName: yup.string().required('Must provide last name.'),
    email: yup.string().email().required('Must provide a valid email.'),
    message: yup.string().required('Must write a message.')
  })
  .required()

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schema) })
  const onSubmit: SubmitHandler<Inputs> = () => (submit = true)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction='row'
        useFlexGap
        flexWrap='wrap'
      >
        <p>First Name:</p>
        <Input {...register('firstName')} />
        <p>{errors.firstName?.message}</p>
        <p>Last Name:</p>
        <Input {...register('lastName')} />
        <p>{errors.lastName?.message}</p>
        <p>Email:</p>
        <Input {...register('email')} />
        <p>{errors.email?.message}</p>
        <p>Message:</p>
        <Input {...register('message')} fullWidth />
        <p>{errors.message?.message}</p>
        <Button type='submit' variant='contained'>
          Send
        </Button>
        {submit && <SuccessAlert />}
      </Stack>
    </form>
  )
}
