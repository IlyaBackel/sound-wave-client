// features/register/ui/RegisterForm.tsx
import { type FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Form } from '../../components/Form';
import { Button } from '../../../shared/ui/Button';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { registration } from '../../../entities/user';

const FormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'The password must contain at least 8 characters'),
});

interface RegistrationData {
  email: string;
  password: string;
}

export const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, error } = useAppSelector((state) => state.userReducer);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitForm = (data: RegistrationData) => {
    dispatch(registration({ email: data.email, password: data.password }));
    reset();
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <Form label="Sign Up" onSubmitForm={handleSubmit(submitForm)}>
      <Input
        labelText="Email"
        name="Email"
        type="text"
        required={true}
        register={register('email', { required: true })}
        error={errors.email?.message}
      />
      <Input
        labelText="Password"
        name="Password"
        type="password"
        required={true}
        register={register('password', { required: true })}
        error={errors.password?.message}
      />
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <Button className="bg-primary" label="Sign Up" />
    </Form>
  );
};