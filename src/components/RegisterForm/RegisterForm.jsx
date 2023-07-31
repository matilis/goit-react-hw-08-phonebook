export const RegisterForm = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.currentTarget;

        console.log(form.value);
        form.reset()
    }
    
    return (
        <form onSubmit={handleSubmit}>
             <label>
                Username<input type="text" name="name" />
            </label>
            <label>
                Email<input type="email" name="email" />
            </label>
            <label>
                Password<input type="password" name="password" />
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}