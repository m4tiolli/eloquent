"use client";
import Image from "next/image";
import mockuplogin from "../../public/mockup-login.png";
import { useState } from "react";
import Input, { Props } from "@/components/Input";
import ActivityIndicator from "@/components/ActivityIndicator";
import classNames from "classnames";
import { useToast } from "@chakra-ui/react";

interface FormData {
  [key: string]: string;
  name: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

function Register() {
  const toast = useToast();
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

  const handleRegister = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Account created!",
          description: "Looks great",
          status: "success",
          isClosable: true,
        });
      } else {
        toast({
          title: "An error occurred",
          description: "An error occurred while registering.",
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "An error occurred while registering.",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-dvh w-full flex items-center justify-between px-20 relative select-none">
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
