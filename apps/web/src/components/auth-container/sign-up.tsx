"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "apis";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useId } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUp } from "@/service/user";

const formSchema = signUpSchema;

type FormValues = z.infer<typeof formSchema>;

export default function SignUp() {
	const t = useTranslations();
	const router = useRouter();
	const { signUp, isSignUpPending } = useSignUp();
	const nameId = useId();
	const emailId = useId();
	const passwordId = useId();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	function onSubmit(data: FormValues) {
		signUp(
			{ json: data },
			{
				onSuccess: (data) => {
					if (!data.token) return;
					localStorage.setItem("token", data.token);
					toast.success(t("auth.signUpSuccess"));
					router.push("/");
				},
				onError: (error) => {
					toast.error(error.message);
				},
			},
		);
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor={nameId}>{t("auth.name")}</Label>
				<Input
					placeholder={t("auth.name")}
					id={nameId}
					type="text"
					{...form.register("name")}
				/>
				{form.formState.errors.name && (
					<p className="text-sm text-red-500">
						{form.formState.errors.name.message}
					</p>
				)}
			</div>
			<div className="space-y-2">
				<Label htmlFor={emailId}>{t("auth.email")}</Label>
				<Input
					id={emailId}
					type="email"
					placeholder="name@example.com"
					{...form.register("email")}
				/>
				{form.formState.errors.email && (
					<p className="text-sm text-red-500">
						{form.formState.errors.email.message}
					</p>
				)}
			</div>

			<div className="space-y-2">
				<Label htmlFor={passwordId}>{t("auth.password")}</Label>
				<Input
					id={passwordId}
					type="password"
					placeholder="********"
					{...form.register("password")}
				/>
				{form.formState.errors.password && (
					<p className="text-sm text-red-500">
						{form.formState.errors.password.message}
					</p>
				)}
			</div>

			<Button type="submit" className="w-full" disabled={isSignUpPending}>
				{t("auth.signUpTitle")}
			</Button>
		</form>
	);
}
