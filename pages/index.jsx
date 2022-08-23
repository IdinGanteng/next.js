
import { useForm } from "react-hook-form";



function signUp(){
  const{
    register,
    handleSubmit,
    watch,
    formState: {errors}

  } = useForm()
  return(
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center"
          style={{
            background:"url(/ilustrasi.jpeg)",
            backgroundSize:"cover"
           }}>
        <div className="w-[50%]">
        <p className="mb-2 text-4xl font-semibold">WELCOME TO PRAXIS ANGKRINGAN</p>
        <p className="mb-6  text-gray-500">Sign up with your email</p>


        <form className="flex flex-col gap-y-2"
              onSubmit={handleSubmit(register)}>
          <label className="font-semibold text-sm">Email</label>
          <input 
            className="border py-1 px-2 rounded-lg"
            placeholder="please enter your email"
            {...register('email',{
              required:'email is required',
              pattern:{
                value:
                /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/,
                message:'please enter a valid email',
                

              }
            })}/>
           
          <p className="text-rose-500">{errors.email?.message}</p>
          <label className="font-semibold text-sm">Password</label>
          <input 
            className="border py-1 px-2 rounded-lg"
            placeholder="please enter your password"
            type={"password"}
             {...register('password',{
              required:'passsword is required'
             })}/>
          <p className="text-rose-500">{errors.email?.message}</p>
          <label className="font-semibold text-sm">Verify password</label>
          <input
            className="border py-1 px-2 rounded-lg"
            placeholder="please repeat your password"
            type={"password"}
            {...register('verify password',{
              validate: (value) =>
              value === watch('password') ? true : 'not match'
            })}/>

          <button className="bg-black hover:shadow-xl transition duration-300 text-white py-2 px-7 rounded-xl text-sm block">
            Sign Up
          </button>
        </form>
      </div>
      </div>


      <div className="flex-1 bg-slate-50 relative"
      style={{
           background:'url(/kopi.png)',
           backgroundSize:'cover',

      }}>
      
      </div>
    </div>
  )
}
export default signUp