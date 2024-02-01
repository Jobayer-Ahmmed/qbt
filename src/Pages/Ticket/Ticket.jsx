import { useForm } from "react-hook-form";
import { setLocalstorageData } from "../../localstorage/localstorage";


const Ticket = () => {
    const {
        register,
        handleSubmit, 
        watch,
        formState: { errors },
      } = useForm();

      // const ticket = watch("ticket")
      const onSubmit=(data)=>{
        const {name, email, time} = data
        setLocalstorageData(name, email, time)
      }
  return (
<div className="flex justify-center items-center">
<div>
    <h2 className="text-2xl font-bold mb-10">Buy a ticket</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Name is required</span>
          )}{" "}
          <br />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Email is required</span>
          )}{" "}
          <br />
            <select {...register("time", {required: true})}
            className="w-64 md:w-80 h-10 px-2 rounded"
            >
                <option value="10:00 am">10:00 am</option>
                <option value="02:00 pm">02:00 pm</option>
                <option value="8:00 pm">8:00 pm</option>
            </select><br />
          <input
            type="submit"
            value="Buy"
            className="mt-5 btn btn-secondary text-white"
          />
        </form>
    </div>
</div>
  )
}

export default Ticket






// import { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link, useNavigate } from "react-router-dom";
// import { TbEye, TbEyeClosed } from "react-icons/tb";
// import { Context } from "../../context/AuthProvider";
// import Swal from "sweetalert2";

// const Login = () => {
//   const [passwordVisiblity, setPasswordVisiblity] = useState("password");
//   const [passwordTrigger, setPasswordTrigger] = useState(false);
//   const navigate = useNavigate()
//   const {login, postLocalDataInDB} = useContext(Context)

//   const {
//     register,
//     handleSubmit, 
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     const {email, password} = data

//     login(email, password)
//     .then(()=>{
//       postLocalDataInDB(email)
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Welcome",
//         showConfirmButton: false,
//         timer: 1500
//       })

//       navigate("/")
//     })
//   };

//   const handlePassword = () => {
//     setPasswordTrigger(!passwordTrigger);
//     if (passwordTrigger) {
//       setPasswordVisiblity("password");
//     } else {
//       setPasswordVisiblity("text");
//     }
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       easing: "ease-in-out", // Easing function for the animation
//     });
//   }, []);

//   return (
//     <div
//       className="py-yPadding w-full flex justify-center "
//       data-aos="fade-right"
//     >
//       <div className="p-10 border rounded-lg shadow-xl">
//         <h2 className="text-2xl font-medium pb-3 border-b mb-5">Login Now</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input
//             {...register("email", { required: true })}
//             placeholder="Email"
//             type="email"
//             className="w-64 md:w-80 h-10 px-2 rounded"
//           />
//           <br />
//           {errors.email && (
//             <span className="text-red-700">Email is required</span>
//           )}{" "}
//           <br />
//           <input
//             {...register("password", { required: true })}
//             placeholder="Password"
//             type={passwordVisiblity}
//             className="w-64 md:w-80 h-10 px-2 rounded "
//           />
//           <TbEye
//             onClick={handlePassword}
//             className={` inline -ml-7 text-2xl ${
//               passwordTrigger ? "hidden" : ""
//             }`}
//           />
//           <TbEyeClosed
//             onClick={handlePassword}
//             className={`inline -ml-7 text-2xl ${
//               passwordTrigger ? "" : "hidden"
//             }`}
//           />
//           <br />
//           {errors.password && (
//             <span className="text-red-700">Password is required</span>
//           )}
//           <br />
//           <input
//             type="submit"
//             value="Login"
//             className="mt-5 btn bg-cyan-800 text-white"
//           />
//         </form>
//         <p className="mt-8">
//           Dont&apos;t have an account?
//           <Link className="underline" to="/register">
//             Register now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
