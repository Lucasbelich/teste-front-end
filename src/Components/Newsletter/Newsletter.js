import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Newsletter.styles.css";

const Login = () => {
  const [subscribed, setSubscribed] = useState(false);

  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = () =>
    Yup.object().shape({
      name: Yup.string().min(4),
      email: Yup.string().email(),
    });

  const onSubmit = (values, { resetForm }) => {
    const { name, email } = values;

    fetch(`${process.env.REACT_APP_URL}/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((response) => {
      if (response.status === 200) {
        setSubscribed(true);
        resetForm({ values: "" });
      }
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, handleBlur, values } = formik;

  return (
    <section className="newsletter_container">
      {!subscribed ? (
        <>
          <h1>Participe de nossas news com promoções e novidades!</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                className={errors.name ? "error" : ""}
                placeholder="Digite seu nome"
              />
              {errors.name && <div>Preencha com seu nome completo</div>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className={errors.email ? "error" : ""}
                placeholder="Digite seu email"
              />
              {errors.email && <div>Preencha com um e-mail válido</div>}
            </div>
            <button type="submit">Eu quero!</button>
          </form>
        </>
      ) : (
        <>
          <p>Seu e-mail foi cadastrado com sucesso!</p>
          <p>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>

          <button onClick={() => setSubscribed(false)}>
            Cadastrar novo e-mail
          </button>
        </>
      )}
    </section>
  );
};

export default Login;
