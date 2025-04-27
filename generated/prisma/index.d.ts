
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Inspiration
 * 
 */
export type Inspiration = $Result.DefaultSelection<Prisma.$InspirationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inspirations
 * const inspirations = await prisma.inspiration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inspirations
   * const inspirations = await prisma.inspiration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inspiration`: Exposes CRUD operations for the **Inspiration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspirations
    * const inspirations = await prisma.inspiration.findMany()
    * ```
    */
  get inspiration(): Prisma.InspirationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Inspiration: 'Inspiration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inspiration"
      txIsolationLevel: never
    }
    model: {
      Inspiration: {
        payload: Prisma.$InspirationPayload<ExtArgs>
        fields: Prisma.InspirationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspirationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspirationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          findFirst: {
            args: Prisma.InspirationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspirationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          findMany: {
            args: Prisma.InspirationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>[]
          }
          create: {
            args: Prisma.InspirationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          createMany: {
            args: Prisma.InspirationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InspirationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          update: {
            args: Prisma.InspirationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          deleteMany: {
            args: Prisma.InspirationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspirationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InspirationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          aggregate: {
            args: Prisma.InspirationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspiration>
          }
          groupBy: {
            args: Prisma.InspirationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspirationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InspirationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InspirationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InspirationCountArgs<ExtArgs>
            result: $Utils.Optional<InspirationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    inspiration?: InspirationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Inspiration
   */

  export type AggregateInspiration = {
    _count: InspirationCountAggregateOutputType | null
    _avg: InspirationAvgAggregateOutputType | null
    _sum: InspirationSumAggregateOutputType | null
    _min: InspirationMinAggregateOutputType | null
    _max: InspirationMaxAggregateOutputType | null
  }

  export type InspirationAvgAggregateOutputType = {
    pageViews: number | null
  }

  export type InspirationSumAggregateOutputType = {
    pageViews: number | null
  }

  export type InspirationMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    websiteLink: string | null
    desktopScreenshot: string | null
    mobileScreenshot: string | null
    colorScheme: string | null
    niche: string | null
    slug: string | null
    metaTitle: string | null
    metaDescription: string | null
    pageViews: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InspirationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    websiteLink: string | null
    desktopScreenshot: string | null
    mobileScreenshot: string | null
    colorScheme: string | null
    niche: string | null
    slug: string | null
    metaTitle: string | null
    metaDescription: string | null
    pageViews: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InspirationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    websiteLink: number
    desktopScreenshot: number
    mobileScreenshot: number
    colorScheme: number
    fonts: number
    techStack: number
    categories: number
    niche: number
    slug: number
    metaTitle: number
    metaDescription: number
    pageViews: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InspirationAvgAggregateInputType = {
    pageViews?: true
  }

  export type InspirationSumAggregateInputType = {
    pageViews?: true
  }

  export type InspirationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    websiteLink?: true
    desktopScreenshot?: true
    mobileScreenshot?: true
    colorScheme?: true
    niche?: true
    slug?: true
    metaTitle?: true
    metaDescription?: true
    pageViews?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InspirationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    websiteLink?: true
    desktopScreenshot?: true
    mobileScreenshot?: true
    colorScheme?: true
    niche?: true
    slug?: true
    metaTitle?: true
    metaDescription?: true
    pageViews?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InspirationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    websiteLink?: true
    desktopScreenshot?: true
    mobileScreenshot?: true
    colorScheme?: true
    fonts?: true
    techStack?: true
    categories?: true
    niche?: true
    slug?: true
    metaTitle?: true
    metaDescription?: true
    pageViews?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InspirationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspiration to aggregate.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inspirations
    **/
    _count?: true | InspirationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspirationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspirationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspirationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspirationMaxAggregateInputType
  }

  export type GetInspirationAggregateType<T extends InspirationAggregateArgs> = {
        [P in keyof T & keyof AggregateInspiration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspiration[P]>
      : GetScalarType<T[P], AggregateInspiration[P]>
  }




  export type InspirationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspirationWhereInput
    orderBy?: InspirationOrderByWithAggregationInput | InspirationOrderByWithAggregationInput[]
    by: InspirationScalarFieldEnum[] | InspirationScalarFieldEnum
    having?: InspirationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspirationCountAggregateInputType | true
    _avg?: InspirationAvgAggregateInputType
    _sum?: InspirationSumAggregateInputType
    _min?: InspirationMinAggregateInputType
    _max?: InspirationMaxAggregateInputType
  }

  export type InspirationGroupByOutputType = {
    id: string
    title: string
    description: string
    websiteLink: string
    desktopScreenshot: string | null
    mobileScreenshot: string | null
    colorScheme: string | null
    fonts: string[]
    techStack: string[]
    categories: string[]
    niche: string | null
    slug: string
    metaTitle: string | null
    metaDescription: string | null
    pageViews: number
    createdAt: Date
    updatedAt: Date
    _count: InspirationCountAggregateOutputType | null
    _avg: InspirationAvgAggregateOutputType | null
    _sum: InspirationSumAggregateOutputType | null
    _min: InspirationMinAggregateOutputType | null
    _max: InspirationMaxAggregateOutputType | null
  }

  type GetInspirationGroupByPayload<T extends InspirationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspirationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspirationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspirationGroupByOutputType[P]>
            : GetScalarType<T[P], InspirationGroupByOutputType[P]>
        }
      >
    >


  export type InspirationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    websiteLink?: boolean
    desktopScreenshot?: boolean
    mobileScreenshot?: boolean
    colorScheme?: boolean
    fonts?: boolean
    techStack?: boolean
    categories?: boolean
    niche?: boolean
    slug?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    pageViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inspiration"]>



  export type InspirationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    websiteLink?: boolean
    desktopScreenshot?: boolean
    mobileScreenshot?: boolean
    colorScheme?: boolean
    fonts?: boolean
    techStack?: boolean
    categories?: boolean
    niche?: boolean
    slug?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    pageViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InspirationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "websiteLink" | "desktopScreenshot" | "mobileScreenshot" | "colorScheme" | "fonts" | "techStack" | "categories" | "niche" | "slug" | "metaTitle" | "metaDescription" | "pageViews" | "createdAt" | "updatedAt", ExtArgs["result"]["inspiration"]>

  export type $InspirationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inspiration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      websiteLink: string
      desktopScreenshot: string | null
      mobileScreenshot: string | null
      colorScheme: string | null
      fonts: string[]
      techStack: string[]
      categories: string[]
      niche: string | null
      slug: string
      metaTitle: string | null
      metaDescription: string | null
      pageViews: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inspiration"]>
    composites: {}
  }

  type InspirationGetPayload<S extends boolean | null | undefined | InspirationDefaultArgs> = $Result.GetResult<Prisma.$InspirationPayload, S>

  type InspirationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspirationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspirationCountAggregateInputType | true
    }

  export interface InspirationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inspiration'], meta: { name: 'Inspiration' } }
    /**
     * Find zero or one Inspiration that matches the filter.
     * @param {InspirationFindUniqueArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspirationFindUniqueArgs>(args: SelectSubset<T, InspirationFindUniqueArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inspiration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspirationFindUniqueOrThrowArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspirationFindUniqueOrThrowArgs>(args: SelectSubset<T, InspirationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspiration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationFindFirstArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspirationFindFirstArgs>(args?: SelectSubset<T, InspirationFindFirstArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspiration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationFindFirstOrThrowArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspirationFindFirstOrThrowArgs>(args?: SelectSubset<T, InspirationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inspirations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspirations
     * const inspirations = await prisma.inspiration.findMany()
     * 
     * // Get first 10 Inspirations
     * const inspirations = await prisma.inspiration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspirationWithIdOnly = await prisma.inspiration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspirationFindManyArgs>(args?: SelectSubset<T, InspirationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inspiration.
     * @param {InspirationCreateArgs} args - Arguments to create a Inspiration.
     * @example
     * // Create one Inspiration
     * const Inspiration = await prisma.inspiration.create({
     *   data: {
     *     // ... data to create a Inspiration
     *   }
     * })
     * 
     */
    create<T extends InspirationCreateArgs>(args: SelectSubset<T, InspirationCreateArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inspirations.
     * @param {InspirationCreateManyArgs} args - Arguments to create many Inspirations.
     * @example
     * // Create many Inspirations
     * const inspiration = await prisma.inspiration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspirationCreateManyArgs>(args?: SelectSubset<T, InspirationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inspiration.
     * @param {InspirationDeleteArgs} args - Arguments to delete one Inspiration.
     * @example
     * // Delete one Inspiration
     * const Inspiration = await prisma.inspiration.delete({
     *   where: {
     *     // ... filter to delete one Inspiration
     *   }
     * })
     * 
     */
    delete<T extends InspirationDeleteArgs>(args: SelectSubset<T, InspirationDeleteArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inspiration.
     * @param {InspirationUpdateArgs} args - Arguments to update one Inspiration.
     * @example
     * // Update one Inspiration
     * const inspiration = await prisma.inspiration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspirationUpdateArgs>(args: SelectSubset<T, InspirationUpdateArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inspirations.
     * @param {InspirationDeleteManyArgs} args - Arguments to filter Inspirations to delete.
     * @example
     * // Delete a few Inspirations
     * const { count } = await prisma.inspiration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspirationDeleteManyArgs>(args?: SelectSubset<T, InspirationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspirations
     * const inspiration = await prisma.inspiration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspirationUpdateManyArgs>(args: SelectSubset<T, InspirationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inspiration.
     * @param {InspirationUpsertArgs} args - Arguments to update or create a Inspiration.
     * @example
     * // Update or create a Inspiration
     * const inspiration = await prisma.inspiration.upsert({
     *   create: {
     *     // ... data to create a Inspiration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspiration we want to update
     *   }
     * })
     */
    upsert<T extends InspirationUpsertArgs>(args: SelectSubset<T, InspirationUpsertArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inspirations that matches the filter.
     * @param {InspirationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inspiration = await prisma.inspiration.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InspirationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Inspiration.
     * @param {InspirationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inspiration = await prisma.inspiration.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InspirationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Inspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationCountArgs} args - Arguments to filter Inspirations to count.
     * @example
     * // Count the number of Inspirations
     * const count = await prisma.inspiration.count({
     *   where: {
     *     // ... the filter for the Inspirations we want to count
     *   }
     * })
    **/
    count<T extends InspirationCountArgs>(
      args?: Subset<T, InspirationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspirationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InspirationAggregateArgs>(args: Subset<T, InspirationAggregateArgs>): Prisma.PrismaPromise<GetInspirationAggregateType<T>>

    /**
     * Group by Inspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InspirationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspirationGroupByArgs['orderBy'] }
        : { orderBy?: InspirationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InspirationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspirationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inspiration model
   */
  readonly fields: InspirationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inspiration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspirationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inspiration model
   */
  interface InspirationFieldRefs {
    readonly id: FieldRef<"Inspiration", 'String'>
    readonly title: FieldRef<"Inspiration", 'String'>
    readonly description: FieldRef<"Inspiration", 'String'>
    readonly websiteLink: FieldRef<"Inspiration", 'String'>
    readonly desktopScreenshot: FieldRef<"Inspiration", 'String'>
    readonly mobileScreenshot: FieldRef<"Inspiration", 'String'>
    readonly colorScheme: FieldRef<"Inspiration", 'String'>
    readonly fonts: FieldRef<"Inspiration", 'String[]'>
    readonly techStack: FieldRef<"Inspiration", 'String[]'>
    readonly categories: FieldRef<"Inspiration", 'String[]'>
    readonly niche: FieldRef<"Inspiration", 'String'>
    readonly slug: FieldRef<"Inspiration", 'String'>
    readonly metaTitle: FieldRef<"Inspiration", 'String'>
    readonly metaDescription: FieldRef<"Inspiration", 'String'>
    readonly pageViews: FieldRef<"Inspiration", 'Int'>
    readonly createdAt: FieldRef<"Inspiration", 'DateTime'>
    readonly updatedAt: FieldRef<"Inspiration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inspiration findUnique
   */
  export type InspirationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration findUniqueOrThrow
   */
  export type InspirationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration findFirst
   */
  export type InspirationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspirations.
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspirations.
     */
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * Inspiration findFirstOrThrow
   */
  export type InspirationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspirations.
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspirations.
     */
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * Inspiration findMany
   */
  export type InspirationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Filter, which Inspirations to fetch.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inspirations.
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * Inspiration create
   */
  export type InspirationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * The data needed to create a Inspiration.
     */
    data: XOR<InspirationCreateInput, InspirationUncheckedCreateInput>
  }

  /**
   * Inspiration createMany
   */
  export type InspirationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inspirations.
     */
    data: InspirationCreateManyInput | InspirationCreateManyInput[]
  }

  /**
   * Inspiration update
   */
  export type InspirationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * The data needed to update a Inspiration.
     */
    data: XOR<InspirationUpdateInput, InspirationUncheckedUpdateInput>
    /**
     * Choose, which Inspiration to update.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration updateMany
   */
  export type InspirationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inspirations.
     */
    data: XOR<InspirationUpdateManyMutationInput, InspirationUncheckedUpdateManyInput>
    /**
     * Filter which Inspirations to update
     */
    where?: InspirationWhereInput
    /**
     * Limit how many Inspirations to update.
     */
    limit?: number
  }

  /**
   * Inspiration upsert
   */
  export type InspirationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * The filter to search for the Inspiration to update in case it exists.
     */
    where: InspirationWhereUniqueInput
    /**
     * In case the Inspiration found by the `where` argument doesn't exist, create a new Inspiration with this data.
     */
    create: XOR<InspirationCreateInput, InspirationUncheckedCreateInput>
    /**
     * In case the Inspiration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspirationUpdateInput, InspirationUncheckedUpdateInput>
  }

  /**
   * Inspiration delete
   */
  export type InspirationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Filter which Inspiration to delete.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration deleteMany
   */
  export type InspirationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspirations to delete
     */
    where?: InspirationWhereInput
    /**
     * Limit how many Inspirations to delete.
     */
    limit?: number
  }

  /**
   * Inspiration findRaw
   */
  export type InspirationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Inspiration aggregateRaw
   */
  export type InspirationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Inspiration without action
   */
  export type InspirationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const InspirationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    websiteLink: 'websiteLink',
    desktopScreenshot: 'desktopScreenshot',
    mobileScreenshot: 'mobileScreenshot',
    colorScheme: 'colorScheme',
    fonts: 'fonts',
    techStack: 'techStack',
    categories: 'categories',
    niche: 'niche',
    slug: 'slug',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    pageViews: 'pageViews',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InspirationScalarFieldEnum = (typeof InspirationScalarFieldEnum)[keyof typeof InspirationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type InspirationWhereInput = {
    AND?: InspirationWhereInput | InspirationWhereInput[]
    OR?: InspirationWhereInput[]
    NOT?: InspirationWhereInput | InspirationWhereInput[]
    id?: StringFilter<"Inspiration"> | string
    title?: StringFilter<"Inspiration"> | string
    description?: StringFilter<"Inspiration"> | string
    websiteLink?: StringFilter<"Inspiration"> | string
    desktopScreenshot?: StringNullableFilter<"Inspiration"> | string | null
    mobileScreenshot?: StringNullableFilter<"Inspiration"> | string | null
    colorScheme?: StringNullableFilter<"Inspiration"> | string | null
    fonts?: StringNullableListFilter<"Inspiration">
    techStack?: StringNullableListFilter<"Inspiration">
    categories?: StringNullableListFilter<"Inspiration">
    niche?: StringNullableFilter<"Inspiration"> | string | null
    slug?: StringFilter<"Inspiration"> | string
    metaTitle?: StringNullableFilter<"Inspiration"> | string | null
    metaDescription?: StringNullableFilter<"Inspiration"> | string | null
    pageViews?: IntFilter<"Inspiration"> | number
    createdAt?: DateTimeFilter<"Inspiration"> | Date | string
    updatedAt?: DateTimeFilter<"Inspiration"> | Date | string
  }

  export type InspirationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    websiteLink?: SortOrder
    desktopScreenshot?: SortOrder
    mobileScreenshot?: SortOrder
    colorScheme?: SortOrder
    fonts?: SortOrder
    techStack?: SortOrder
    categories?: SortOrder
    niche?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    pageViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspirationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: InspirationWhereInput | InspirationWhereInput[]
    OR?: InspirationWhereInput[]
    NOT?: InspirationWhereInput | InspirationWhereInput[]
    title?: StringFilter<"Inspiration"> | string
    description?: StringFilter<"Inspiration"> | string
    websiteLink?: StringFilter<"Inspiration"> | string
    desktopScreenshot?: StringNullableFilter<"Inspiration"> | string | null
    mobileScreenshot?: StringNullableFilter<"Inspiration"> | string | null
    colorScheme?: StringNullableFilter<"Inspiration"> | string | null
    fonts?: StringNullableListFilter<"Inspiration">
    techStack?: StringNullableListFilter<"Inspiration">
    categories?: StringNullableListFilter<"Inspiration">
    niche?: StringNullableFilter<"Inspiration"> | string | null
    metaTitle?: StringNullableFilter<"Inspiration"> | string | null
    metaDescription?: StringNullableFilter<"Inspiration"> | string | null
    pageViews?: IntFilter<"Inspiration"> | number
    createdAt?: DateTimeFilter<"Inspiration"> | Date | string
    updatedAt?: DateTimeFilter<"Inspiration"> | Date | string
  }, "id" | "slug">

  export type InspirationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    websiteLink?: SortOrder
    desktopScreenshot?: SortOrder
    mobileScreenshot?: SortOrder
    colorScheme?: SortOrder
    fonts?: SortOrder
    techStack?: SortOrder
    categories?: SortOrder
    niche?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    pageViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InspirationCountOrderByAggregateInput
    _avg?: InspirationAvgOrderByAggregateInput
    _max?: InspirationMaxOrderByAggregateInput
    _min?: InspirationMinOrderByAggregateInput
    _sum?: InspirationSumOrderByAggregateInput
  }

  export type InspirationScalarWhereWithAggregatesInput = {
    AND?: InspirationScalarWhereWithAggregatesInput | InspirationScalarWhereWithAggregatesInput[]
    OR?: InspirationScalarWhereWithAggregatesInput[]
    NOT?: InspirationScalarWhereWithAggregatesInput | InspirationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inspiration"> | string
    title?: StringWithAggregatesFilter<"Inspiration"> | string
    description?: StringWithAggregatesFilter<"Inspiration"> | string
    websiteLink?: StringWithAggregatesFilter<"Inspiration"> | string
    desktopScreenshot?: StringNullableWithAggregatesFilter<"Inspiration"> | string | null
    mobileScreenshot?: StringNullableWithAggregatesFilter<"Inspiration"> | string | null
    colorScheme?: StringNullableWithAggregatesFilter<"Inspiration"> | string | null
    fonts?: StringNullableListFilter<"Inspiration">
    techStack?: StringNullableListFilter<"Inspiration">
    categories?: StringNullableListFilter<"Inspiration">
    niche?: StringNullableWithAggregatesFilter<"Inspiration"> | string | null
    slug?: StringWithAggregatesFilter<"Inspiration"> | string
    metaTitle?: StringNullableWithAggregatesFilter<"Inspiration"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Inspiration"> | string | null
    pageViews?: IntWithAggregatesFilter<"Inspiration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Inspiration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inspiration"> | Date | string
  }

  export type InspirationCreateInput = {
    id?: string
    title: string
    description: string
    websiteLink: string
    desktopScreenshot?: string | null
    mobileScreenshot?: string | null
    colorScheme?: string | null
    fonts?: InspirationCreatefontsInput | string[]
    techStack?: InspirationCreatetechStackInput | string[]
    categories?: InspirationCreatecategoriesInput | string[]
    niche?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    pageViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InspirationUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    websiteLink: string
    desktopScreenshot?: string | null
    mobileScreenshot?: string | null
    colorScheme?: string | null
    fonts?: InspirationCreatefontsInput | string[]
    techStack?: InspirationCreatetechStackInput | string[]
    categories?: InspirationCreatecategoriesInput | string[]
    niche?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    pageViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InspirationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteLink?: StringFieldUpdateOperationsInput | string
    desktopScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    mobileScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    colorScheme?: NullableStringFieldUpdateOperationsInput | string | null
    fonts?: InspirationUpdatefontsInput | string[]
    techStack?: InspirationUpdatetechStackInput | string[]
    categories?: InspirationUpdatecategoriesInput | string[]
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspirationUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteLink?: StringFieldUpdateOperationsInput | string
    desktopScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    mobileScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    colorScheme?: NullableStringFieldUpdateOperationsInput | string | null
    fonts?: InspirationUpdatefontsInput | string[]
    techStack?: InspirationUpdatetechStackInput | string[]
    categories?: InspirationUpdatecategoriesInput | string[]
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspirationCreateManyInput = {
    id?: string
    title: string
    description: string
    websiteLink: string
    desktopScreenshot?: string | null
    mobileScreenshot?: string | null
    colorScheme?: string | null
    fonts?: InspirationCreatefontsInput | string[]
    techStack?: InspirationCreatetechStackInput | string[]
    categories?: InspirationCreatecategoriesInput | string[]
    niche?: string | null
    slug: string
    metaTitle?: string | null
    metaDescription?: string | null
    pageViews?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InspirationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteLink?: StringFieldUpdateOperationsInput | string
    desktopScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    mobileScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    colorScheme?: NullableStringFieldUpdateOperationsInput | string | null
    fonts?: InspirationUpdatefontsInput | string[]
    techStack?: InspirationUpdatetechStackInput | string[]
    categories?: InspirationUpdatecategoriesInput | string[]
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspirationUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    websiteLink?: StringFieldUpdateOperationsInput | string
    desktopScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    mobileScreenshot?: NullableStringFieldUpdateOperationsInput | string | null
    colorScheme?: NullableStringFieldUpdateOperationsInput | string | null
    fonts?: InspirationUpdatefontsInput | string[]
    techStack?: InspirationUpdatetechStackInput | string[]
    categories?: InspirationUpdatecategoriesInput | string[]
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InspirationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    websiteLink?: SortOrder
    desktopScreenshot?: SortOrder
    mobileScreenshot?: SortOrder
    colorScheme?: SortOrder
    fonts?: SortOrder
    techStack?: SortOrder
    categories?: SortOrder
    niche?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    pageViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspirationAvgOrderByAggregateInput = {
    pageViews?: SortOrder
  }

  export type InspirationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    websiteLink?: SortOrder
    desktopScreenshot?: SortOrder
    mobileScreenshot?: SortOrder
    colorScheme?: SortOrder
    niche?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    pageViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspirationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    websiteLink?: SortOrder
    desktopScreenshot?: SortOrder
    mobileScreenshot?: SortOrder
    colorScheme?: SortOrder
    niche?: SortOrder
    slug?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    pageViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspirationSumOrderByAggregateInput = {
    pageViews?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InspirationCreatefontsInput = {
    set: string[]
  }

  export type InspirationCreatetechStackInput = {
    set: string[]
  }

  export type InspirationCreatecategoriesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type InspirationUpdatefontsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InspirationUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InspirationUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}