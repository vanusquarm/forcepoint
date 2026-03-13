export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export enum PaymentGateway {
  STRIPE = 'STRIPE',
  COD = 'CASH_ON_DELIVERY',
  CASH = 'CASH',
  FULL_WALLET_PAYMENT = 'FULL_WALLET_PAYMENT',
  PAYPAL = 'PAYPAL',
  MOLLIE = 'MOLLIE',
  RAZORPAY = 'RAZORPAY',
  PAYSTACK = 'PAYSTACK',
  XENDIT = 'XENDIT',
  SSLCOMMERZ = 'SSLCOMMERZ',
  IYZICO = 'IYZICO',
}

export enum WithdrawStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  OnHold = 'ON_HOLD',
  Rejected = 'REJECTED',
  Processing = 'PROCESSING',
}

export type QueryOptionsType = {
  page?: number;
  name?: string;
  limit?: number;
  orderBy?: string;
  sortedBy?: SortOrder;
};

export enum PaymentStatus {
  PENDING = 'payment-pending',
  PROCESSING = 'payment-processing',
  SUCCESS = 'payment-success',
  FAILED = 'payment-failed',
  REVERSAL = 'payment-reversal',
  COD = 'payment-cash-on-delivery',
}

export interface NameAndValueType {
  name: string;
  value: string;
}
export enum Permission {
  SuperAdmin = 'super_admin',
  BusinessOwner = 'super_user',
  Staff = 'staff',
  Customer = 'customer',
}

export interface GetParams {
  slug: string;
}

export interface QueryOptions {
  language: string;
  limit?: number;
  page?: number;
  pageNumber?: number; //or
  orderBy?: string;
  sortedBy?: SortOrder;
}

export interface PaginatorInfo<T> {
  current_page: number; // page index
  pageNumber: number; // xc
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: unknown[];
  next_page_url: string | null;
  path: string;
  per_page: number; // page size
  pageSize: number; // xc
  prev_page_url: string | null;
  to: number;
  total: number;

  // Generic response type
  dataQuery?: unknown;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  [key: string]: unknown;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  permissions: string[];
}

export interface CreateTypeInput {
  name: string;
  slug?: string;
  language?: string;
  gallery?: AttachmentInput[];
  icon?: string;
  banner_text?: string;
}

export interface AttributeValueInput {
  id?: number;
  value: string;
  meta?: string;
}

export interface AttributeValueCreateInput {
  value: string;
  meta: string;
  attribute_id?: number;
}

export interface Variation {
  id?: string;
  title?: string;
  image?: Attachment;
  digital_file?: DigitalFile;
  price?: number;
  sku?: string;
  is_disable?: boolean;
  sale_price?: number;
  quantity?: number;
  options?: VariationOption[];
}

export interface DigitalFile {
  created_at?: string;
  id: string;
  attachment_id: string;
  file_name: string;
  updated_at?: string;
  url: string;
}

export interface VariationOption {
  name?: string;
  value?: string;
}

export interface VariationOptionInput {
  name?: string;
  value?: string;
}

export interface Attachment {
  thumbnail: string;
  original: string;
  id?: string;
}

export interface AttachmentInput {
  thumbnail: string;
  original: string;
  id?: string;
}

export interface ConnectTypeBelongsTo {
  connect?: string;
}

export interface Balance {
  id?: string;
  admin_commission_rate?: number;
  total_earnings?: number;
  withdrawn_amount?: number;
  current_balance?: number;
  payment_info?: PaymentInfo;
}

export interface PaymentInfo {
  account?: string;
  name?: string;
  email?: string;
  bank?: string;
}

export interface PaymentInfoInput {
  account?: string;
  name?: string;
  email?: string;
  bank?: string;
}

export interface BalanceInput {
  id?: string;
  payment_info?: PaymentInfoInput;
}

export interface UserSettings {
  socials?: UserSocials[];
  contact?: string;
  location?: Location;
  website?: string;
  notifications: {
    email: string;
    enable: boolean;
  };
}

export interface Location {
  lat?: number;
  lng?: number;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}

export interface UserSocials {
  icon?: string;
  url?: string;
}

export interface UserAddress {
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
  street_address?: string;
}

export interface MakeAdminInput {
  user_id: string;
}

export interface User {
  id: string;
  name?: string;
  username: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  email: string;
  createdTimestamp?: string;
  emailVerified?: boolean;
  groups: string[];
}

export interface CreateUserInput {
  username: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  email: string;
  groups: string[];
}

export interface Group {
  id: string;
  name: string;
  path: string;
  subGroupCount: number;
  subGroups: string[];
  access: unknown;
}

export interface UpdateUser {
  name?: string;
  profile?: UserProfileInput;
  address?: UserAddressUpsertInput[];
}

export interface Profile {
  id: string;
  avatar?: Attachment;
  bio?: string;
  contact?: string;
  socials?: Social[];
  customer?: User;
}

export interface Social {
  type?: string;
  link?: string;
}

export interface Address {
  id: string;
  title?: string;
  default?: boolean;
  address?: UserAddress;
  type?: string;
  customer?: User;
  location: GoogleMapLocation;
}

export interface DigitalFileInput {
  file_name: string;
  attachment_id: string;
  id?: string;
  url: string;
}

export interface Transaction {
  data?: any[];
  slug?: string;
  created_at?: string;
  updated_at?: string;
}
// -> TODO: Simplify this
export interface MappedPaginatorInfo {
  currentPage: number;
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: unknown[];
  nextPageUrl: string | null;
  path: string;
  perPage: number;
  prevPageUrl: string | null;
  to: number;
  total: number;
  hasMorePages: boolean;
}

export interface CardInput {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  email?: string;
}

export declare type UserAddressInput = {
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
  street_address?: string;
};

export interface AbusiveReport {
  id?: number;
  user_id?: number;
  user: User[];
  model_id: number;
  model_type: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface CreateAbuseReportInput {
  model_id: string;
  model_type: string;
  message: string;
}

export interface CreateMessageSeenInput {
  id: string;
}

export interface Tax {
  id?: string;
  name?: string;
  rate?: number;
}

export interface Location {
  lat?: number;
  lng?: number;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}

export interface LatestMessage {
  body: string;
  conversation_id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  id: string;
}

export interface FacebookSettings {
  appId?: string;
  isEnable?: boolean;
  pageId?: string;
}

export interface GoogleSettings {
  isEnable?: boolean;
  tagManagerId?: string;
}

export type SeoSettings = {
  canonicalUrl?: string;
  metaDescription?: string;
  metaTags?: string;
  metaTitle?: string;
  ogDescription?: string;
  ogImage?: Attachment;
  ogTitle?: string;
  twitterCardType?: string;
  twitterHandle?: string;
};

export interface SeoSettingsInput {
  metaTitle?: string;
  metaDescription?: string;
  metaTags?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: AttachmentInput;
  twitterHandle?: string;
  twitterCardType?: string;
}

export interface GoogleSettingsInput {
  isEnable: boolean;
  tagManagerId: string;
}

export interface FacebookSettingsInput {
  isEnable?: boolean;
  appId?: string;
  pageId?: string;
}

export interface ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
}

export interface ForgetPasswordInput {
  email: string;
}

export interface VerifyForgetPasswordTokenInput {
  token: string;
  email: string;
}

export interface ResetPasswordInput {
  token: string;
  email: string;
  password: string;
}

export declare interface MakeAdminInput {
  user_id: string;
}

export interface BlockUserInput {
  id: number;
}

export interface LocationInput {
  lat?: number;
  lng?: number;
  street_number?: string;
  route?: string;
  street_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}

export interface UserAddressUpsertInput {
  title: string;
  default?: boolean;
  address: UserAddressInput;
  type: string;
}

export interface SocialInput {
  type?: string;
  link?: string;
}

export interface UserProfileInput {
  id: string;
  avatar?: AttachmentInput;
  bio?: string;
  socials?: SocialInput[];
  contact?: string;
}

export interface CategoryQueryOptions extends QueryOptions {
  type: string;
  name: string;
  parent: number | null;
}

export interface ConversationQueryOptions extends QueryOptions {
  search?: string;
}

export interface TagQueryOptions extends QueryOptions {
  type: string;
  name: string;
  parent: number | null;
}

export interface AttributeValueQueryOptions extends QueryOptions {
  type: string;
  name: string;
}

export interface TaxQueryOptions extends QueryOptions {
  name: string;
}

export interface ShippingQueryOptions extends QueryOptions {
  name: string;
}

export interface TransactionQueryOptions extends QueryOptions {
  pageSize: string;
}

export interface TypeQueryOptions extends QueryOptions {
  name: string;
}

export interface UserQueryOptions extends QueryOptions {
  name: string;
}

export interface OrderStatusQueryOptions extends QueryOptions {
  name: string;
}

export interface CouponQueryOptions extends QueryOptions {
  code: string;
}

export interface MessageQueryOptions extends QueryOptions {
  slug: string;
}

export interface GoogleMapLocation {
  lat?: number;
  lng?: number;
  street_number?: string;
  route?: string;
  street_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}

export interface TransactionPaginator extends PaginatorInfo<Transaction> {}

// export interface WithdrawPaginator extends PaginatorInfo<Withdraw> {}

// export interface UserPaginator extends PaginatorInfo<User> {}

export type PaginatedData<T> = {
  result: T[];
  rowCount: number;
};

export type PaginationParams = { pageIndex: number; pageSize: number };
export type SortParams = { sortBy: `${string}.${"asc" | "desc"}` };
export type Filters<T> = Partial<T & PaginationParams & SortParams>;
