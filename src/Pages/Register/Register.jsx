import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {singup} = useContext(AuthContext)

    const [error, setError] = useState({});

    console.log(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    singup(data.email, data.password)
    .then(result =>{
        console.log(result.user);
        if(result.user.providerId){
            Swal.fire(
                'Success!',
                'Welcome to Soprtofia.',
                'success'
            )
        }
    })
    .then(err =>{
        setError(err);
    })
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input
                      type="text"
                      {...register("userName", { required: true })}
                      placeholder="userName"
                      className="input input-bordered"
                    />
                    {errors.userName && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                      placeholder="password"
                      className="input input-bordered"
                      />
                        {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">Need to be atleast 6 character</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-500" role="alert">Not more than 20 character</p>}
                        {errors.password?.type === 'required' && <p className="text-red-500" role="alert">password field is required</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500">Password need to with one Uppercase, one lower case, one number and one special character</p>}
                    {errors.required && (<span className="text-red-500"> This field is required </span> )}
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" />
                  </div>
                  <span className="font-medium mt-5">
                    Already have an account? Please{" "}
                    <Link className="text-orange-500" to="/login">
                      Login
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;