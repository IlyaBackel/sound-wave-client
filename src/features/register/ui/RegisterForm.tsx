import { type FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/providers/StoreProvider';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Input';
import { Form } from '../../components/Form';
import { Button } from '../../../shared/ui/Button';
import { colors } from '../../../shared/config/theme';

const FormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'The password must contain at least 8 characters'),
});

interface RegistrationData {
  email: string;
  password: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const RegisterForm: FC = () => {
  const { store } = useStore();
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
    store.login(data.email, data.password);
    reset();
  };

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
      <Button className={`bg-[${colors.primary}]`} label="Sign Up" />
    </Form>
  );
};

export default observer(RegisterForm);
