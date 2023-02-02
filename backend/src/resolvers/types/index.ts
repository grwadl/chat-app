import { MyContext } from "../..";
import { RequireFields, Resolver, ResolverTypeWrapper } from "../../types";

export type ResolverFunc<
  TResponse,
  TRequireFieldsArgs,
  TParamName extends keyof TRequireFieldsArgs
> = Resolver<
  ResolverTypeWrapper<TResponse>,
  {},
  MyContext,
  RequireFields<TRequireFieldsArgs, TParamName>
>;
