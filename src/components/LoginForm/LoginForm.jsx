

export const LoginForm = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.currentTarget;

        console.log(form.value);
        form.reset()
    }
    
    return (
        <form onSubmit={handleSubmit}>
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