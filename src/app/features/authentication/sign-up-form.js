"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Button from "@/app/ui/button";
import Heading from "@/app/ui/heading";
import { createCustomerAccount } from "@/app/services/service";

function SignUpForm() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  async function submitAction(data) {
    const res = await createCustomerAccount(data);
    if (res.statusCode === 201) {
      toast.success(res.message);
      reset();
      router.push("/auth/sign-in");
    } else {
      toast.error(res.message);
    }
  }
  function errorAction(error) {}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <Heading level={2} className=" text-center">
          Sign Up
        </Heading>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(submitAction, errorAction)}
        >
          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="your@email.com"
              required
              {...register("email")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              required
              {...register("password")}
            />
            <p className="flex items-center text-xs text-[#11296B] mt-1">
              <span className="a-icon a-icon-alert mr-2"></span>
              Password must consist of at least 7 characters, Including a
              number, an uppper case character, a lower case character and a
              symbol.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              {...register("confirmPassword")}
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-[#11296B] mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="firstname"
                {...register("firstName")}
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-[#11296B] mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="lastname"
                {...register("lastName")}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="your_username"
              {...register("username")}
            />
          </div>

          <div className="mt-10 border-t border-gray-300 flex flex-col gap-2 pt-4">
            <label className="block text-sm font-medium text-[#11296B] ">
              Address
            </label>
            <input
              type="text"
              id="street"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="Street Address"
              {...register("street")}
            />
            <div className="flex space-x-4">
              <input
                type="text"
                id="city"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="city"
                {...register("city")}
              />

              <input
                type="text"
                id="province"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="province"
                {...register("province")}
              />

              <input
                type="text"
                id="postCode"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="postcode"
                {...register("postCode")}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Phone Numer
            </label>
            <input
              type="number"
              id="phoneNumber"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="phone number"
              {...register("phoneNumber")}
            />
          </div>

          <Button>Create Account</Button>
        </form>

        <div className="mt-10 ml-10 mr-10 border-t border-gray-300"></div>
        <div className="mt-2 text-center text-sm text-gray-600 flex justify-center items-center gap-1">
          <p>Already have an account?</p>
          <span className="text-[#11296B] hover:text-[#1E96FC] font-semibold">
            <Link href="/auth/sign-in">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
