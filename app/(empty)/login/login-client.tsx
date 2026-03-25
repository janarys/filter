"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginClient() {
  const { push } = useRouter();
  const [errors, setErrors] = useState<null | string>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://api.filter.li/api/v1/auth/with_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("login"),
          password: data.get("password"),
        }),
      });
      const json = await res.json();
      if (json.result?.token) {
        localStorage.setItem("token", json.result.token);
        push("/moderation");
      } else {
        setErrors(json.message || "An error occurred during sign-in.");
      }
    } catch (error) {
      setErrors("Unable to connect to the authentication server.");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        className="max-w-[320px] flex flex-col gap-4 w-full"
        onSubmit={submit}
      >
        {errors && <div className="text-red-500 font-medium text-sm">{errors}</div>}
        <Input name="login" placeholder="login" />
        <Input name="password" placeholder="password" type="password" />
        <Button
          type="submit"
          styles="items-center justify-center"
          label={"Login"}
        />
      </form>
    </div>
  );
}
