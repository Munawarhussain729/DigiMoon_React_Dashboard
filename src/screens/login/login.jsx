import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import ic_mail from '../../assets/svg/ic_mail.svg';
import ic_password from '../../assets/svg/ic_password.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/authActions';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../component/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userToken } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState({
    email: '',
    password: '',
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    const token = localStorage.getItem('userToken') || userToken;
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate, userToken]);

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = { email: '', password: '' };
    // Check for email and password input
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    // Update the validation error state
    setValidationError(errors);

    // Only proceed if there are no validation errors
    if (!errors.email && !errors.password) {
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then((res) => {
          localStorage.setItem('userToken', res.data.token);
          localStorage.setItem('userInfo', JSON.stringify(res.data.user));
          toast.success('Login successful!');
          navigate('/dashboard');
        })
        .catch((err) => {
          toast.error(err || 'An error occurred during login');
        })
        .finally(() => {
          // Clear email and password fields in both success and failure
          setEmail('');
          setPassword('');
        });
    }
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="w-[500px] h-[580px] shrink-0 shadow-[0px_12px_40px_0px_rgba(189,220,230,0.50)] rounded-3xl">
          <div>
            <img src={Logo} alt="Logo" className="mt-[83px] mx-auto" />
            <p className="text-[#6575E0] text-center text-sm font-medium capitalize">
              Login to marketing automation Platform
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="max-w-[373px] mt-12 mx-auto">
              <div className=" w-full h-[46px] relative">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="loginInput h-full w-full rounded-md border bg-[#FEFEFE] border-[#D1D1D1] shadow-[0px_2px_7px_0px_rgba(82, 82, 82, 0.06)] pl-9"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <img
                  src={ic_mail}
                  alt=""
                  className="absolute top-[18px] left-3.5 items-center"
                />
              </div>
              <div>
                {validationError.email && (
                  <p className="text-xs text-red-600 mt-1 text-left tracking-wider">
                    {validationError.email}
                  </p>
                )}
              </div>
              <div className=" w-full h-[46px] mt-5 relative">
                <input
                  value={password}
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Password"
                  className="loginInput h-full w-full rounded-md border bg-[#FEFEFE] border-[#D1D1D1] shadow-[0px_2px_7px_0px_rgba(82, 82, 82, 0.06)] pl-9"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={ic_password}
                  alt=""
                  className="absolute top-4 left-4 items-center"
                />
                <button
                  type="button"
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {password ? (
                    passwordShown ? (
                      <i
                        id="icon"
                        className="fa fa-eye-slash cursor-pointer"
                      ></i>
                    ) : (
                      <i id="icon" className="fa fa-eye cursor-pointer"></i>
                    )
                  ) : null}
                </button>
              </div>
              <div>
                {validationError.password && (
                  <p className="text-xs text-red-600 mt-1 text-left tracking-wider">
                    {validationError.password}
                  </p>
                )}
              </div>
              <div className="mt-5 flex justify-between items-center">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p className="text-[#848484] text-[10px] font-light leading-[normal]">
                    Remember Me
                  </p>
                </label>
                <a
                  href=""
                  className="text-[#848484] text-right text-[10px] font-light leading-[normal]"
                >
                  Forgot password?
                </a>
              </div>
              {/* <Link to='/dashboard'> */}
              {!loading ? (
                <input
                  type="button"
                  value="Get Started"
                  className="mt-8 h-11 rounded-md w-full bg-[#4D4AFB] text-white text-sm font-semibold leading-[120%] capitalize cursor-pointer"
                  onClick={handleSubmit}
                />
              ) : (
                <input
                  type="button"
                  value="Loading..."
                  className="mt-8 h-11 rounded-md w-full bg-[#4D4AFB] text-white text-sm font-semibold leading-[120%] capitalize"
                />
              )}

              {/* </Link> */}
              <p className="mt-3 text-[#848484] text-center text-xs font-medium leading-3">
                Didn’t have an account{' '}
                <span>
                  <a
                    href=""
                    className="text-[#848484] text-xs font-bold leading-[18px] hover:underline"
                  >
                    Signup
                  </a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
