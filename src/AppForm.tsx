import { useState } from "react";

function AppForm() {
    const [value, setValue] = useState('');
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        console.log(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`오롯이 너를 만나러 가는길 - ${value}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    onChange={handleChange}
                    type="text"
                    placeholder="username"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default AppForm;
