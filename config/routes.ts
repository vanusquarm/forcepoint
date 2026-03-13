export const Routes = {
  dashboard: "/",
  login: "/login",
  logout: "/logout",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  adminMyShops: "/my-shops",
  profile: "/profile",
  verifyCoupons: "/coupons/verify",
  settings: "/settings",
  profileUpdate: "/profile-update",
  checkout: "/orders/checkout",
  verifyEmail: "/verify-email",
  user: {
    ...routesFactory("/users"),
  },
  type: {
    ...routesFactory("/groups"),
  },
  category: {
    ...routesFactory("/categories"),
  },
  attribute: {
    ...routesFactory("/attributes"),
  },
  attributeValue: {
    ...routesFactory("/attribute-values"),
  },
  tag: {
    ...routesFactory("/tags"),
  },
  reviews: {
    ...routesFactory("/reviews"),
  },
  abuseReviews: {
    ...routesFactory("/abusive_reports"),
  },
  abuseReviewsReport: {
    ...routesFactory("/abusive_reports/reject"),
  },
  transaction: {
    ...routesFactory("/transactions"),
  },
  coupon: {
    ...routesFactory("/coupons"),
  },
  tax: {
    ...routesFactory("/taxes"),
  },
  withdraw: {
    ...routesFactory("/withdraws"),
  },
  staff: {
    ...routesFactory("/staffs"),
  },
  refund: {
    ...routesFactory("/refunds"),
  },
  question: {
    ...routesFactory("/questions"),
  },
  message: {
    ...routesFactory("/message"),
  },
  conversations: {
    ...routesFactory("/message/conversations"),
  },
  transactionNotice: {
    ...routesFactory("/transaction-notices"),
  },
  transactionNoticeRead: {
    ...routesFactory("/transaction-notices/read"),
  },
};

function routesFactory(endpoint: string) {
  return {
    list: `${endpoint}`,
    create: `${endpoint}/create`,
    editWithoutLang: (slug: string, shop?: string) => {
      return shop
        ? `/${shop}${endpoint}/${slug}/edit`
        : `${endpoint}/${slug}/edit`;
    },
    edit: (slug: string, language: string, shop?: string) => {
      return shop
        ? `/${language}/${shop}${endpoint}/${slug}/edit`
        : `${language}${endpoint}/${slug}/edit`;
    },
    translate: (slug: string, language: string, shop?: string) => {
      return shop
        ? `/${language}/${shop}${endpoint}/${slug}/translate`
        : `${language}${endpoint}/${slug}/translate`;
    },
    details: (slug: string) => `${endpoint}/${slug}`,
  };
}
