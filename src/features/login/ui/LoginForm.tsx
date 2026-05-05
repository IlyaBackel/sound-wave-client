// features/login/ui/LoginForm.tsx
import { type FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Form } from '../../components/Form';
import { Button } from '../../../shared/ui/Button';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { login } from '../../../entities/user';

const FormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'The password must contain at least 8 characters'),
});

interface LoginData {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, error } = useAppSelector((state) => state.userReducer);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: '', password: '' },
  });

  const submitForm = (data: LoginData) => {
    dispatch(login({ email: data.email, password: data.password }));
    reset();
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <Form label="Sign In" onSubmitForm={handleSubmit(submitForm)}>
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
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button className="bg-primary" label="Sign In" />
    </Form>
  );
};