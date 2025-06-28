"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

type FormValues = z.infer<typeof formSchema>;

export default function SignUp() {
	const t = useTranslations();
	const emailId = useId();
	const passwordId = useId();
	const confirmPasswordId = useId();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(data: FormValues) {
		console.log(data);
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

			<div className="space-y-2">
				<Label htmlFor={confirmPasswordId}>{t("auth.confirmPassword")}</Label>
				<Input
					id={confirmPasswordId}
					type="password"
					{...form.register("confirmPassword")}
				/>
				{form.formState.errors.confirmPassword && (
					<p className="text-sm text-red-500">
						{form.formState.errors.confirmPassword.message}
					</p>
				)}
			</div>

			<Button type="submit" className="w-full">
				{t("auth.signUpTitle")}
			</Button>
		</form>
	);
}
