"use client";
import {Label} from "../ui/label";
import {Input} from "../ui/input";
import {cn} from "@/lib/utils";
import {IconArrowBack} from '@tabler/icons-react';
import Link from "next/link";
import useLogin from "@/hooks/login";

export function SignupFormDemo() {

  const {login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    await login(form.get('tel'), form.get('pass'))
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-transparent">
      <div className={'flex justify-between'}>
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to multi-account
        </h2>
        <Link href={'/'}><IconArrowBack className={'text-white'}/></Link>
      </div>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to multi-account if you can because we don&apos;t have a login flow
        yet
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Phone number</Label>
          <Input id="number" name={'tel'} placeholder="+1 123 456 7890" type="tel"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name={'pass'} placeholder="••••••••" type="password"/>
        </LabelInputContainer>
        <button
          className="button-effect group/btn"
          type="submit"
        >
          Login &rarr;
          <BottomGradient/>
        </button>
        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
      <span
        className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
    </>
  );
};

const LabelInputContainer = ({children, className,}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
