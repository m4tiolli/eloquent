"use client";
import Image from "next/image";
import mockuplogin from "../../public/mockup-login.png";
import { useState } from "react";
import Input, { Props } from "@/components/Input";
import ActivityIndicator from "@/components/ActivityIndicator";
import classNames from "classnames";

interface FormData {
  [key: string]: string;
  name: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

function Register() {
  const initialValues: FormData = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<FormData>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const inputs: Props[] = [
    {
      name: "name",
      placeholder: "Full Name",
      value: values.name,
      onchange: handleInputChange,
    },
    {
      name: "email",
      placeholder: "Email",
      value: values.email,
      onchange: handleInputChange,
    },
    {
      name: "username",
      placeholder: "Username",
      value: values.username,
      onchange: handleInputChange,
    },
    {
      name: "password",
      placeholder: "Password",
      value: values.password,
      onchange: handleInputChange,
    },
    {
      name: "confirmpassword",
      placeholder: "Confirm Password",
      value: values.confirmpassword,
      onchange: handleInputChange,
    },
  ];

  const invalid = () => {
    for (let key in values) {
      if (values[key] === "") {
        return true;
      }
    }
  };

  const handleRegister = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  };

  return (
    <main className="h-dvh w-full flex items-center justify-between px-20 relative">
      <div className="w-2/5 h-4/5 border-[1px] border-[#171717] rounded-xl flex flex-col items-center justify-start py-8 px-10 gap-4">
        <h1 className="font-bold text-3xl">Create your account</h1>
        {inputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <button
          disabled={invalid()}
          onClick={handleRegister}
          className={classNames(
            "w-full h-12 rounded-md bg-white text-black font-medium transition-all hover:opacity-75",
            { "opacity-50 cursor-not-allowed": invalid() ?? loading }
          )}
        >
          {loading ? (
            <ActivityIndicator color="border-black" />
          ) : (
            "Create account"
          )}
        </button>
      </div>
      <div className="w-2/5 h-4/5 gap-12 flex items-end justify-center flex-col">
        <h1 className="font-bold text-5xl">
          Register now and get out of frustations with bills
        </h1>
        <Image
          src={mockuplogin}
          alt="Phone"
          sizes="40%"
          className="w-full h-3/5 object-contain object-center"
        />
        
      </div>
    </main>
  );
}

export default Register;
