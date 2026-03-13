export const AddCardTemp =
[
  'Id',
  'UserId',
  'NameOnCard',
  'CardNumber',
  'CardCVV',
  'CardExp',
  'RandomDebitAmount',
  'UseRandomDebit',
  'Status',
  'DateCreated',
  'GatewayOrderId',
  'GatewayTransId',
  'GatewayResponseData',
  'RefundStatus',
  'RefundResponseData'
]
export const ActivityLog =
[
  'id',         'user_id',
  'user_email', 'path',
  'method',     'src_ip',
  'payload',    'created_at',
  'updated_at'
]
export const BlackList =
[ 'id', 'value', 'blacklistedDate' ]
export const ChannelService =
[
  'id',
  'Service',
  'Channel',
  'TransactionLimit',
  'DailyLimit',
  'MonthlyLimit',
  'ServiceAccount',
  'SuspenseAccount',
  'ServiceCommissionAccount',
  'ServiceCommissionFixedAmount',
  'ServiceCommissionPercentage',
  'MinServiceCommission',
  'MaxServiceCommission',
  'ServiceChargeAccount',
  'ServiceChargeFixedAmount',
  'ServiceChargePercentage',
  'MinServiceCharge',
  'MaxServiceCharge',
  'ApiChargeAccount',
  'ApiChargeFixedAmount',
  'ApiChargePercentage',
  'MinApiCharge',
  'MaxApiCharge',
  'IsActive'
]
export const AppUsers =
[
  'userId',
  'name',
  'email',
  'phoneNumber',
  'status',
  'dateCreated'
]
export const Debit =
[
  'DebitId',          'GTBTransId',
  'ChannelTransId',   'Agent',
  'SourceAccount',    'DestinationAccount',
  'Status',           'BasisCode',
  'EntryDate',        'Amount',
  'LastUpdate',       'DebitReference',
  'Message',          'ProviderTransId',
  'CallbackFunction', 'TPTransId',
  'PaymentMode',      'Remarks'
]
export const ChargeAndCommission =
[
  'id',                'name',
  'type',              'chargeValueType',
  'chargeValue',       'minCharge',
  'maxCharge',         'startAmount',
  'endAmount',         'chargeAccount',
  'chargeDebitSource', 'chargeCode',
  'paymentOption',     'status',
  'createdDate'
]
export const EwalletDebit =
[
  'DebitId',
  'GTBTransId',
  'TPTransId',
  'Agent',
  'SourceAccount',
  'DestinationAccount',
  'Status',
  'BasisCode',
  'EntryDate',
  'Amount',
  'LastUpdate',
  'Message',
  'DebitReference'
]
export const FieldDataType =
[ 'Id', 'Name' ]
export const Bank =
[ 'BankId', 'BankCode', 'BankName', 'CanSend', 'CanReceive' ]
export const DeviceSessions =
[
  'id',
  'UserId',
  'UserPlatformId',
  'DeviceName',
  'SessionKey',
  'SessionToken',
  'Status',
  'DateCreated',
  'AppVersion',
  
]
export const EwalletTransLog =
[
  'TransactionId',       'AgentId',
  'Agent',               'ActivityTypeId',
  'TPTransId',           'GTBTransId',
  'SourceAccount',       'DestinationAccount',
  'DestAcctName',        'Currency',
  'Amount',              'PrevBal',
  'PostBal',             'PayerName',
  'PayerMobile',         'Remarks',
  'Status',              'RequestTime',
  'ReceiveTime',         'ResponseTime',
  'PayeeName',           'PayeeMobile',
  'ProcessType',         'PINRequestTime',
  'PINReceiveTime',      'PINStatus',
  'Activity',            'DestinationBank',
  'ChannelReference',    'ActivityId',
  'Message',             'LastUpdate',
  'CallbackURL',         'CallbackStatus',
  'CallbackStartTime',   'CallbackEndTime',
  'TelcoCallbackStatus', 'TelcoCallbackEntryDate',
  'SettlementStartTime', 'SettlementEndTime',
  'Network'
]
export const GipTransLog =
[
  'TransId',          'Amount',
  'DateTime',         'TrackingNumber',
  'FunctionCode',     'OriginBank',
  'DestBank',         'SessionId',
  'ChannelCode',      'AccountToCredit',
  'NameToCredit',     'AccountToDebit',
  'NameToDebit',      'Naration',
  'EntryDate',        'Status',
  'LastUpdate',       'AmountString',
  'Sender',           'ActCode',
  'AprvCode',         'ActivityId',
  'ChannelReference', 'QRData'
]
export const FieldDataTypes =
[
  'Id',
  'UserId',
  'PaymentOptionId',
  'Label',
  'Status',
  'DateCreated',
  
  
  
  
  
]
export const APISwitchRequestLogs =
[
  'Id',
  'SessionId',
  'RequestType',
  'RequestBody',
  'RequestDate',
  'ResponseBody',
  'ResponseDate',
  'Status',
  'TransactionId',
  'CallbackResponse'
]
export const GIP =
[
  'GipId',           'SessionId',
  'ServiceTransId',  'EntryDate',
  'LastUpdate',      'ActCode',
  'AprvCode',        'SrcAccount',
  'SrcAccountName',  'DestAccount',
  'DestAccountName', 'TransLogId',
  'Amount',          'Status',
  'GTBTransId',      'QrData'
]
export const FormFieldOptions =
[
  'Id',
  'UserId',
  'PaymentOptionId',
  'Label',
  'Status',
  'DateCreated',
  
  
  
  
  
]
export const GipDebit =
[
  'DebitId',
  'TransactionId',
  'SourceAccount',
  'DestinationAccount',
  'Amount',
  'EntryDate',
  'BasisCode',
  'LastUpdate',
  'Status',
  'Message'
]
export const GTBAccount =
[
  'Id',
  'UserPaymentOptionId',
  'AccountNumber',
  'IBUserId',
  'IBPassword',
  'Status',
  
]
export const FormFieldOption =
[
  'Id',
  'ServiceId',
  'FormFieldId',
  'Label',
  'Value',
  'Status',
  
  
]
export const GTBAccounts =
[
  'Id',
  'UserId',
  'PaymentOptionId',
  'Label',
  'Status',
  'DateCreated',
  
  
  
  
  
]
export const AirtelTigoAirtelTigoTransactions =
[
  'TransactionId',       'AgentId',
  'Agent',               'ActivityTypeId',
  'TPTransId',           'GTBTransId',
  'SourceAccount',       'DestinationAccount',
  'DestAcctName',        'Currency',
  'Amount',              'PrevBal',
  'PostBal',             'PayerName',
  'PayerMobile',         'Remarks',
  'Status',              'RequestTime',
  'ReceiveTime',         'ResponseTime',
  'PayeeName',           'PayeeMobile',
  'ProcessType',         'PINRequestTime',
  'PINReceiveTime',      'PINStatus',
  'Activity',            'DestinationBank',
  'ChannelReference',    'ActivityId',
  'Message',             'LastUpdate',
  'CallbackURL',         'CallbackStatus',
  'CallbackStartTime',   'CallbackEndTime',
  'TelcoCallbackStatus', 'TelcoCallbackEntryDate',
  'SettlementStartTime', 'SettlementEndTime',
  'Network'
]
export const PartnerService =
[
  'id',
  'serviceName',
  'serviceCategoriesId',
  'serviceCode',
  'status',
  
]
export const PartnerTransaction =
[
  'id',                   
  // 'agentId',
  'agent',                
  // 'activityLogId',
  // 'providerTransId',      
  // 'partnerGTBtransId',
  // 'gtbtransId',           
  'partnerTransId',
  'sourceAccount',        
  'serviceNumber',
  // 'paidBy',               
  // 'payeeName',
  'amount',               
  'remarks',
  // 'commission',           
  // 'commissionAccount',
  // 'data',                 
  'entryDate',
  // 'responseTime',         
  // 'activity',
  // 'message',              
  // 'callbackURL',
  // 'callbackStatus',       
  // 'lastUpdate',
  // 'callbackStartTime',    
  // 'callbackEndTime',
  // 'providerCallbackTime', 
  // 'status',
  // 'userCallsId'
]
export const CheckoutTransaction = [
  "id",
  "transId",
  // "phoneNumber",
  // "accountNumber",
  // "cardNumber",
  "sourceAccount",
  "amount",
  // "fee",
  // "totalAmount",
  // "transDate",
  "channelTransId",
  "message",
  "serviceName",
  "paymentOptionMode"
];

export const CheckoutService = [
  "accountNumber",
  "amount",
  "approvedBy",
  "approvedDate",
  "contactEmail",
  "contactNumber",
  "dateCreated",
  "feeType",
  "feeValue",
  "id",
  "image",
  "merchantId",
  "name",
  "serviceKey",
  "serviceToken",
  "serviceType",
  "status",
  "sugar"
];

export const PaymentOption =
[ 'Id', 'Name', 'Status', 'ModeName',   ]
export const PartnerUserService =
[
  'PartnerServiceId',
  'Partner',
  'ServiceName',
  'ChargeCommission',
  'FixedCommission',
  'CommissionRate',
  'MinCommission',
  'MaxCommission',
  'ChargeCustomer',
  'CommissionAccount',
  'IsActive'
]
export const PaymentOptions =
[
  'id',
  'modeName',
  'name',
  'status',
  
  
  
  
  
]
export const PartnerUser =
[
  // 'Id',                   
  'email',
  // 'EmailConfirmed',
  // 'PasswordHash',
  // 'SecurityStamp',        
  'phoneNumber',
  // 'PhoneNumberConfirmed', 
  // 'TwoFactorEnabled',
  // 'LockoutEndDateUtc',    
  // 'LockoutEnabled',
  // 'AccessFailedCount',    
  'userName',
  'partnerAccount',       
  // 'PartnerCode',
  // 'PrivateKey',           
  // 'ApiSwitchKey',
                
  
]
export const ServiceAccounts =
[
  'Id',
  'Name',
  'Description',
  'UniqueFieldValue',
  'UserId',
  'ServiceCategoryId',
  'ServiceId',
  'DateCreated',
  
  
  
]
export const ServicePaymentOption =
[ 'Id', 'ServiceId', 'PaymentOptionId',  ]
export const ServiceCategories =
[
  'id',
  'title',
  'type',
  'icon',
  'sequenceNumber',
  
  
]
export const Merchants = [
  "name",
  "description",
  "status",
  "category",
  "services",
];
export const SystemMedia =
[ 'type', 'sequence', 'name', 'status' ]
export const ServiceFormField =
[
  'Id',             'Title',
  'FieldDataType',  'Required',
  'ServiceId',      'FieldLength',
  'FromThirdParty', 'IsAmountField',
  'FieldSequence',  'AddToRemarks',
  'DefaultValue',   'ReadOnly',
  'ShowField',      
  
]
export const Transaction =
[
  'Id',                  'TransId',
  'ExtTransId',          'UserId',
  'ServiceId',           'ServiceAccountId',
  'UserPaymentOptionId', 'PaymentOptionId',
  'TransDate',           'ResponseDate',
  'Amount',              'Charge',
  'TotalAmount',         'Currency',
  'Status',              'SessionId',
  'StatusMessage',       
               
               
               
]
export const TickerInformation =
[ 'Id', 'Title', 'Description', 'Mode', 'EntryDate', 'Status' ]
export const Services =
[
  'Id',                    'Title',
  'Description',           'ServiceImage',
  'ServiceCode',           'MerchantId',
  'ServiceCategoryId',     'AccountNumber',
  'SuspenceAccountNumber', 'UniqueFieldType',
  'UniqueFieldLabel',      'DescriptionFieldLabel',
  'ServiceType',           'ChargeType',
  'ChargeValue',           'Status',
  'DateCreated',           'TransactionLimit',
  'RemarksPrefix',         
                 
                 
]
export const UserCard =
[
  'Id',
  'UserPaymentOptionId',
  'UserId',
  'NameOnCard',
  'CardNumber',
  'CardExp',
  'Status',
  'DateCreated',
  
]
export const TransLog =
[
  'TransLogId',
  'AgentId',
  'Agent',
  'ActivityTypeId',
  'TPTransId',
  'GTBTransId',
  'SourceAccount',
  'DestinationAccount',
  'DestAcctName',
  'Currency',
  'Amount',
  'PrevBal',
  'PostBal',
  'PayerName',
  'Wallet',
  'Remarks',
  'Status',
  'RequestTime',
  'EntryDate',
  'ResponseTime',
  'PayeeName',
  'PayeeMobile',
  'Network',
  'PINRequestTime',
  'PINReceiveTime',
  'PINStatus',
  'Activity',
  'DestinationBank',
  'ChannelReference',
  'ActivityLogId',
  'Message',
  'CallbackURL',
  'CallbackStatus',
  'LastUpdate',
  'CallbackStartTime',
  'CallbackEndTime',
  'ChannelTransId',
  'ProviderTransId',
  'ProviderStatus',
  'ProviderLastUpdate',
  'Commission',
  'CommissionAccount',
  'SuspenseAccount',
  'APICommission',
  'APICommissionAccount',
  'ChargeCustomer',
  'AmountProcessed',
  'ServiceAccountNumber',
  'ProviderMessage',
  'ServiceCommission',
  'ServiceCommissionAccount',
  'PaymentMode',
  'PaymentNetwork',
  'IsServiceAccountCredited',
  'IsServiceCommissionCredited',
  'IsApiChargeCredited',
  'IsServiceChargeCredited',
  'ServiceCharge',
  'ServiceChargeAccount',
  'IsReversed'
]

// export const User =
// [
//   'id',
//   'name',
//   'email',
//   'email_verified_at',
//   'password',
//   'user_type',
//   'auth_level_id',
//   'remember_token',
//   'created_at',
//   'updated_at'
// ]

export const User = [
  "id",
  "username",
  "firstName",
  "lastName",
  "email",
  // "createdTimestamp",
  // "enabled",
  // "disableableCredentialTypes",
  // "emailVerified",
  // "notBefore",
  // "requiredActions",
  // "totp",
];

export const UserCards =
[
  'Id',
  'UserId',
  'PaymentOptionId',
  'Label',
  'Status',
  'DateCreated',
  
  
  
  
  
]
export const UserPaymentOptions =
[
  'Id',
  'UserId',
  'PaymentOptionId',
  'Label',
  'Status',
  'DateCreated',
  
  
  
  
  
]
export const UserData =
[
  'Id',           'UserIdStr',
  'IDType',       'IDNumber',
  'Address',      'Gender',
  'UserId',       'ReferralCode',
  'ReferredCode', 'ReferredUserId',
        
]
export const TransactionIssue =
[
  'id',
  'transactionId',
  'userId',
  'issueNumber',
  'description',
  'status',
  'dateCreated',
  
]
export const UserServiceCharge =
[ 'Id', 'UserId', 'ChargeId', 'Service', 'Status', 'CreatedDate' ]
export const UserPlatforms =
[
  'Id',
  'UserId',
  'PlatformName',
  'DeviceName',
  'UserAgent',
  'NotificationToken',
  'DeviceIMEI',
  'PlatformKey',
  'PlatformIV',
  'Status',
  'LastUpdated'
]
export const Users =
[
  'Name',
  'Email',
  'Auth_level_id',
  'Created_at'
]
export const VodafoneCashTransaction =
[
  'id',            'transdate',
  'sourceAccount', 'transactionCode',
  'destAccount',   'amount',
  'status',        'Msisdn',
  'statusDesc',    'transName',
  'CompanyID',     'referecnceID',
  'transmitted',   'bFName',
  'bLName',        'currency',
  'mDate',         'countryCode',
  'Remarks',       'DebitResponse'
]
export const VodafoneCashTransactionLog =
[
  'Id',
  'RequestBody',
  'ResponseBody',
  'CallBackResponseBody',
  'RequestType',
  'PhoneNumber',
  'VoucherCode',
  'Amount',
  'ResponseConversationID',
  'ResponseDesc',
  'ResponseCode',
  'ResultType',
  'ResultCode',
  'ResultDescription',
  'ResultOriginatorConversationID',
  'ResultConversationID',
  'ResultTranactionID',
  'TransDate',
  'Remarks',
  'Charge'
]
export const Wallets =
[
  'Id',
  'PhoneNumber',
  'Network',
  'Status',
  'UserPaymentOptionId',
  'DateCreated',
  
]








































































































































































































































































































































































































































































