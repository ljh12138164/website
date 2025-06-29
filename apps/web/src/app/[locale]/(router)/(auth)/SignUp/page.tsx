import { getTranslations } from "next-intl/server";
import AuthCard from "@/components/auth-container/auth-card";
import SignUp from "@/components/auth-container/sign-up";

export default async function Page() {
	const t = await getTranslations();

	return (
		<section className="flex flex-col items-center justify-center min-h-svh p-4">
			<AuthCard
				title={t("auth.signUpTitle")}
				description={t("auth.signUpDescription")}
				link={"SignIn"}
				linkText={t("auth.signInTitle")}
			>
				<SignUp />
			</AuthCard>
		</section>
	);
}
