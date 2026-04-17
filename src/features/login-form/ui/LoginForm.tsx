import { useState, type FC } from "react"
import { observer } from "mobx-react-lite"
import { useStore } from "../../../app/providers/StoreProvider"

// eslint-disable-next-line react-refresh/only-export-components
const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { store } = useStore()

    return (
        <>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <button onClick={() => store.login(email, password)}>
                Login
            </button>
            <button onClick={() => store.registration(email, password)}>
                Registration
            </button>
            <button onClick={() => store.logout()}>
                Exit
            </button>
        </>
    )
}

export default observer(LoginForm);