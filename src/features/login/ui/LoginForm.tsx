import { type FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/providers/StoreProvider';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../shared/ui/Input';

const FormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'The password must contain at least 8 characters'),
});

interface LoginData {
  email: string;
  password: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const LoginForm: FC = () => {
  const { store } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitForm = (data: LoginData) => {
    store.login(data.email, data.password);
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen w-min-content px-10">
      <div className="border-2 px-16 py-8 rounded-2xl flex flex-col gap-6">
        <h1 className="text-center text-4xl font-bold">Login</h1>
        <form
          className="flex flex-col gap-4 items-center-safe"
          onSubmit={handleSubmit(submitForm)}
        >
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
          <button
            type="submit"
            className="border-2 rounded-2xl w-min-content py-2 px-4 font-bold text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default observer(LoginForm);
