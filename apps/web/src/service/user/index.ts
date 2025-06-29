import { useMutation } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono/client";
import { handleRequest } from "@/utils";
import client from "..";

type SignInParams = InferRequestType<typeof client.user.signIn.$post>;
type SignInResponse = InferResponseType<typeof client.user.signIn.$post>;

/** ### 登录 */
export const useSignIn = () => {
	const { mutate: signIn, isPending: isSignInPending } = useMutation<
		SignInResponse,
		Error,
		SignInParams
	>({
		mutationFn: async (data: SignInParams) => {
			const response = await client.user.signIn.$post(data);
			return handleRequest<SignInResponse>(response);
		},
	});
	return { signIn, isSignInPending };
};

type SignUpParams = InferRequestType<typeof client.user.signUp.$post>;
type SignUpResponse = InferResponseType<typeof client.user.signUp.$post>;
/** ### 注册 */
export const useSignUp = () => {
	const { mutate: signUp, isPending: isSignUpPending } = useMutation<
		SignUpResponse,
		Error,
		SignUpParams
	>({
		mutationFn: async (data: SignUpParams) => {
			const response = await client.user.signUp.$post(data);
			return handleRequest<SignUpResponse>(response);
		},
	});
	return { signUp, isSignUpPending };
};
