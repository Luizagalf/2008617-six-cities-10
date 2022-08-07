import { Link } from 'react-router-dom';

const Error = (): JSX.Element => (
  <div className="page page--gray page--error">
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="error">
          <div className="error__text">
            <h1>404 Not Found</h1>
            <Link to="/" className="error__text-link">
              Перейти на главную страницу
            </Link>{' '}
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Error;
