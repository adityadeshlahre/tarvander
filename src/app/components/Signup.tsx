"use client";

import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import Button from "./Button";
import { useNavigate } from "../hooks/useNavigate";
import { signup } from "../actions/user";
import { UserModel } from "../../../zod-schemas";

UserModel;

export function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [contact, setContact] = useState<string>("");
  const [role, setRole] = useState<string>("0");

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      ("use server");
      await signup(password, name, age, contact, email, role);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                placeholder="name@gmail.com"
              />
              <LabelledInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type={"password"}
                placeholder="Password"
              />
              <LabelledInput
                onChange={(e) => setName(e.target.value)}
                label="Name"
                placeholder="Full Name"
              />
              <LabelledInput
                onChange={(e) => setAge(Number(e.target.value))}
                label="Age"
                type="number"
                placeholder="Your age"
              />
              <LabelledInput
                onChange={(e) => setContact(e.target.value)}
                label="Contact"
                placeholder="Phone number"
              />
              <LabelledInput
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                placeholder="Enter role (0 for Passenger, 1 for Leader)"
              />
              <Button
                notiTitle="Sing Up successfull"
                appName="Sign Up"
                onClickFucn={handleClick}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
