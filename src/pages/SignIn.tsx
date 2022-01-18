import './signin.styles.css';

export default function Signin() {

	return (
    <main className="container">
      <section id="signin-form">
        <h2>Sign in to service</h2>
        <p>Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit pharetra egestas.</p>
        <form>
          <input type="text" name="firstname" placeholder="First name" aria-label="First name" required />
          <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
          <fieldset>
            <label for="terms">
              <input type="checkbox" role="switch" id="terms" name="terms" />
              I agree to the <a href="#" onclick="event.preventDefault()">Privacy Policy</a>
            </label>
          </fieldset>
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
	)
}

