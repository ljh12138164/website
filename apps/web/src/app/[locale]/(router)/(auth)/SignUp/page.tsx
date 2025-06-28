import Link from "next/link";
import { getTranslations } from "next-intl/server";
import SignUp from "@/components/auth-container/sign-up";

export default async function Page() {
	const t = await getTranslations();

	return (
		<section className="flex flex-col items-center justify-center min-h-svh p-4">
			<div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">{t("auth.signUpTitle")}</h1>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{t("auth.signUpDescription")}
					</p>
				</div>
				<SignUp />
				<div className="text-center text-sm">
					<span className="text-gray-500 dark:text-gray-400">
						{t("auth.haveAccount")}{" "}
					</span>
					<Link
						href={"/SignIn"}
						className="font-medium text-primary hover:underline"
					>
						{t("auth.signInTitle")}
					</Link>
				</div>
			</div>
		</section>
	);
}
