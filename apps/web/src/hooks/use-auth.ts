"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetUserInfo } from "@/service/user";
import { useAuthStore } from "@/store/auth";

const isJumpPath = ["/"];
export const useAuth = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { getUserInfo, isGetUserInfoPending, userInfo } = useGetUserInfo();
	const setUserInfo = useAuthStore((state) => state.setUserInfo);
	const t = useTranslations();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		getUserInfo({}).finally(() => setIsLoading(false));
	}, [getUserInfo]);

	useEffect(() => {
		if (isGetUserInfoPending || isLoading) return;
		if (isJumpPath.includes(pathname) && !userInfo) {
			toast.dismiss();
			toast.error(t("auth.authError"));
			router.push("/SignIn");
		}
		if (userInfo) setUserInfo(userInfo);
	}, [
		userInfo,
		isGetUserInfoPending,
		isLoading,
		pathname,
		router,
		setUserInfo,
		t,
	]);

	/** 如果用户信息获取成功，则返回用户信息 */
	return { isLoading: isGetUserInfoPending, userInfo };
};
