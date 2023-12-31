import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const {singin} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    singin(data.email, data.password)
    .then(result =>{
        const loginUser = result.user;
        console.log(loginUser);
        if(result.user.providerId){
            Swal.fire(
                'Success!',
                'Welcome to Soprtofia.',
                'success'
            )
        }
    })
    .then(err => console.log(err))
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
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
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-500">This field is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password && (
                      <span className="text-red-500">This field is required</span>
                    )}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" />
                  </div>
                  <span className="font-medium mt-5">
                    Dont have an Account? Please{" "}
                    <Link className="text-orange-500" to="/register">
                      Register
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

export default Login;
