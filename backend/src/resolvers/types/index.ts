import { MyContext } from '@/src'
import {
  RequireFields,
  Resolver,
  ResolverTypeWrapper,
} from '@src/generated-types'

export type ResolverFunc<
  TResponse,
  TRequireFieldsArgs,
  TParamName extends keyof TRequireFieldsArgs
> = Resolver<
  ResolverTypeWrapper<TResponse>,
  Record<string, unknown>,
  MyContext,
  RequireFields<TRequireFieldsArgs, TParamName>
>
