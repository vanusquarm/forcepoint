export type AddCardTemp =
{
  Id: string
  UserId: string
  NameOnCard: string
  CardNumber: string
  CardCVV: string
  CardExp: string
  RandomDebitAmount: string
  UseRandomDebit: string
  Status: string
  DateCreated: Date
  GatewayOrderId: string
  GatewayTransId: string
  GatewayResponseData: string
  RefundStatus: string
  RefundResponseData: string
}
export type ActivityLog =
{
  id: string         
  user_id: string
  user_email: string 
  path: string
  method: string     
  src_ip: string
  payload: string    
  created_at: string
  updated_at: string
}
export type BlackList =
{ 
  Id: string 
  Value: string 
  BlacklistedDate: string 
}
export type ChannelService =
{
  id: string
  Service: string
  Channel: string
  TransactionLimit: string
  DailyLimit: string
  MonthlyLimit: string
  ServiceAccount: string
  SuspenseAccount: string
  ServiceCommissionAccount: string
  ServiceCommissionFixedAmount: string
  ServiceCommissionPercentage: string
  MinServiceCommission: string
  MaxServiceCommission: string
  ServiceChargeAccount: string
  ServiceChargeFixedAmount: string
  ServiceChargePercentage: string
  MinServiceCharge: string
  MaxServiceCharge: string
  ApiChargeAccount: string
  ApiChargeFixedAmount: string
  ApiChargePercentage: string
  MinApiCharge: string
  MaxApiCharge: string
  IsActive: string
}
export type AppUsers =
{
  Id: number
  UserId: string
  Name: string
  Email: string
  PhoneNumber: string
  Status: number
  DateCreated: Date
  Password: string
  VerificationToken: string
  
  
}
export type Debit =
{
  DebitId: string          
  GTBTransId: string
  ChannelTransId: string   
  Agent: string
  SourceAccount: string    
  DestinationAccount: string
  Status: string           
  BasisCode: string
  EntryDate: string        
  Amount: string
  LastUpdate: string       
  DebitReference: string
  Message: string          
  ProviderTransId: string
  CallbackFunction: string 
  TPTransId: string
  PaymentMode: string      
  Remarks: string
}
export type ChargeAndCommission =
{
  Id: string                
  Name: string
  Type: string              
  ChargeValueType: string
  ChargeValue: string       
  MinCharge: string
  MaxCharge: string         
  StartAmount: string
  EndAmount: string         
  ChargeAccount: string
  ChargeDebitSource: string 
  ChargeCode: string
  PaymentOption: string     
  Status: string
  CreatedDate: string
}
export type EwalletDebit =
{
  DebitId: string
  GTBTransId: string
  TPTransId: string
  Agent: string
  SourceAccount: string
  DestinationAccount: string
  Status: string
  BasisCode: string
  EntryDate: string
  Amount: string
  LastUpdate: string
  Message: string
  DebitReference: string
}
export type FieldDataType =
{ 
  Id: string 
  Name: string
}
export type Bank =
{ 
  BankId: string 
  BankCode: string 
  BankName: string 
  CanSend: string 
  CanReceive: string
}
export type DeviceSessions =
{
  id: string
  UserId: string
  UserPlatformId: string
  DeviceName: string
  SessionKey: string
  SessionToken: string
  Status: string
  DateCreated: Date
  AppVersion: string
  
}
export type EwalletTransLog =
{
  TransactionId: string       
  AgentId: string
  Agent: string               
  ActivityTypeId: string
  TPTransId: string           
  GTBTransId: string
  SourceAccount: string       
  DestinationAccount: string
  DestAcctName: string        
  Currency: string
  Amount: string              
  PrevBal: string
  PostBal: string             
  PayerName: string
  PayerMobile: string         
  Remarks: string
  Status: string              
  RequestTime: string
  ReceiveTime: string         
  ResponseTime: string
  PayeeName: string           
  PayeeMobile: string
  ProcessType: string         
  PINRequestTime: string
  PINReceiveTime: string      
  PINStatus: string
  Activity: string            
  DestinationBank: string
  ChannelReference: string    
  ActivityId: string
  Message: string             
  LastUpdate: string
  CallbackURL: string         
  CallbackStatus: string
  CallbackStartTime: string   
  CallbackEndTime: string
  TelcoCallbackStatus: string 
  TelcoCallbackEntryDate: string
  SettlementStartTime: string 
  SettlementEndTime: string
  Network: string
}
export type GipTransLog =
{
  TransId: string          
  Amount: string
  DateTime: string         
  TrackingNumber: string
  FunctionCode: string     
  OriginBank: string
  DestBank: string         
  SessionId: string
  ChannelCode: string      
  AccountToCredit: string
  NameToCredit: string     
  AccountToDebit: string
  NameToDebit: string      
  Naration: string
  EntryDate: string        
  Status: string
  LastUpdate: string       
  AmountString: string
  Sender: string           
  ActCode: string
  AprvCode: string         
  ActivityId: string
  ChannelReference: string 
  QRData: string
}
export type FieldDataTypes =
{
  Id: string
  UserId: string
  PaymentOptionId: string
  Label: string
  Status: string
  DateCreated: Date
  
}
export type APISwitchRequestLogs =
{
  Id: string
  SessionId: string
  RequestType: string
  RequestBody: string
  RequestDate: string
  ResponseBody: string
  ResponseDate: string
  Status: string
  TransactionId: string
  CallbackResponse: string
}
export type GIP =
{
  GipId: string           
  SessionId: string
  ServiceTransId: string  
  EntryDate: string
  LastUpdate: string      
  ActCode: string
  AprvCode: string        
  SrcAccount: string
  SrcAccountName: string  
  DestAccount: string
  DestAccountName: string 
  TransLogId: string
  Amount: string          
  Status: string
  GTBTransId: string      
  QrData: string
}
export type FormFieldOptions =
{
  Id: string
  UserId: string
  PaymentOptionId: string
  Label: string
  Status: string
  DateCreated: Date
}
export type GipDebit =
{
  DebitId: string
  TransactionId: string
  SourceAccount: string
  DestinationAccount: string
  Amount: string
  EntryDate: string
  BasisCode: string
  LastUpdate: string
  Status: string
  Message: string
}
export type GTBAccount =
{
  Id: string
  UserPaymentOptionId: string
  AccountNumber: string
  IBUserId: string
  IBPassword: string
  Status: string
  
}
export type FormFieldOption =
{
  Id: string
  ServiceId: string
  FormFieldId: string
  Label: string
  Value: string
  Status: string
  
  
}
export type GTBAccounts =
{
  Id: string
  UserId: string
  PaymentOptionId: string
  Label: string
  Status: string
  DateCreated: Date
  
  
  
  
  
}
export type AirtelTigoAirtelTigoTransactions =
{
  TransactionId: string       
  AgentId: string
  Agent: string               
  ActivityTypeId: string
  TPTransId: string           
  GTBTransId: string
  SourceAccount: string       
  DestinationAccount: string
  DestAcctName: string        
  Currency: string
  Amount: string              
  PrevBal: string
  PostBal: string             
  PayerName: string
  PayerMobile: string         
  Remarks: string
  Status: string              
  RequestTime: string
  ReceiveTime: string         
  ResponseTime: string
  PayeeName: string           
  PayeeMobile: string
  ProcessType: string         
  PINRequestTime: string
  PINReceiveTime: string      
  PINStatus: string
  Activity: string            
  DestinationBank: string
  ChannelReference: string    
  ActivityId: string
  Message: string             
  LastUpdate: string
  CallbackURL: string         
  CallbackStatus: string
  CallbackStartTime: string   
  CallbackEndTime: string
  TelcoCallbackStatus: string 
  TelcoCallbackEntryDate: string
  SettlementStartTime: string 
  SettlementEndTime: string
  Network: string
}
export type PartnerService =
{
  id: string
  serviceName: string
  serviceCategoriesId: string
  serviceCode: string
  status: string
  
}
export type PartnerTransaction =
{
  Id: string                   
  AgentId: string
  Agent: string                
  ActivityLogId: string
  ProviderTransId: string      
  PartnerGTBTransId: string
  GTBTransId: string           
  PartnerTransId: string
  SourceAccount: string        
  ServiceNumber: string
  PaidBy: string               
  PayeeName: string
  Amount: string               
  Remarks: string
  Commission: string           
  CommissionAccount: string
  Data: string                 
  EntryDate: string
  ResponseTime: string         
  Activity: string
  Message: string              
  CallbackURL: string
  CallbackStatus: string       
  LastUpdate: string
  CallbackStartTime: string    
  CallbackEndTime: string
  ProviderCallbackTime: string 
  Status: string
  UserCallsId: string
}
export type PaymentOption =
{ 
  Id: string 
  Name: string 
  Status: string 
  ModeName: string  
}
export type PartnerUserService =
{
  PartnerServiceId: string
  Partner: string
  ServiceName: string
  ChargeCommission: string
  FixedCommission: string
  CommissionRate: string
  MinCommission: string
  MaxCommission: string
  ChargeCustomer: string
  CommissionAccount: string
  IsActive: string
}
export type PaymentOptions =
{
  Id: string
  UserId: string
  PaymentOptionId: string
  Label: string
  Status: string
  DateCreated: Date
  
  
  
  
  
}
export type PartnerUser =
{
  Id: string                   
  Email: string
  EmailConfirmed: string       
  PasswordHash: string
  SecurityStamp: string       
  PhoneNumber: string
  PhoneNumberConfirmed: string 
  TwoFactorEnabled: string
  LockoutEndDateUtc: string    
  LockoutEnabled: string
  AccessFailedCount: string    
  UserName: string
  PartnerAccount: string       
  PartnerCode: string
  PrivateKey: string           
  ApiSwitchKey: string
            
  
}
export type ServiceAccounts =
{
  Id: string
  Name: string
  Description: string
  UniqueFieldValue: string
  UserId: string
  ServiceCategoryId: string
  ServiceId: string
  DateCreated: Date
  
  
  
}
export type ServicePaymentOption =
{ Id: string 
  ServiceId: string 
  PaymentOptionId: string  }
export type ServiceCategories =
{
  Id: string
  Title: string
  Type: string
  Icon: string
  SequenceNumber: string
  
  
}
export type Merchants =
{
  Id: string
  Name: string
  Description: string
  AccountNumber: string
  Image: string
  Status: string
  DateCreated: Date
  CategoryId: string
  
}
export type SystemMedia =
{ 
  Id: string 
  Type: string 
  Sequence: string
  Name: string 
  Status: string
}
export type ServiceFormField =
{
  Id: string             
  Title: string
  FieldDataType: string  
  Required: string
  ServiceId: string      
  FieldLength: string
  FromThirdParty: string 
  IsAmountField: string
  FieldSequence: string  
  AddToRemarks: string
  DefaultValue: string   
  ReadOnly: string
  ShowField: string      
  
}
export type Transaction =
{
  Id: string                  
  TransId: string
  ExtTransId: string          
  UserId: string
  ServiceId: string           
  ServiceAccountId: string
  UserPaymentOptionId: string 
  PaymentOptionId: string
  TransDate: string           
  ResponseDate: string
  Amount: string              
  Charge: string
  TotalAmount: string         
  Currency: string
  Status: string              
  SessionId: string
  StatusMessage: string       
               
               
               
}
export type TickerInformation =
{ 
  Id: string 
  Title: string 
  Description: string 
  Mode: string 
  EntryDate: string 
  Status: string 
}
export type Services =
{
  Id: string                    
  Title: string
  Description: string           
  ServiceImage: string
  ServiceCode: string           
  MerchantId: string
  ServiceCategoryId: string     
  AccountNumber: string
  SuspenceAccountNumber: string 
  UniqueFieldType: string
  UniqueFieldLabel: string      
  DescriptionFieldLabel: string
  ServiceType: string           
  ChargeType: string
  ChargeValue: string           
  Status: string
  DateCreated: Date           
  TransactionLimit: string
  RemarksPrefix: string         
                 
                 
}
export type UserCard =
{
  Id: string
  UserPaymentOptionId: string
  UserId: string
  NameOnCard: string
  CardNumber: string
  CardExp: string
  Status: string
  DateCreated: Date
  
}
export type TransLog =
{
  TransLogId: string
  AgentId: string
  Agent: string
  ActivityTypeId: string
  TPTransId: string
  GTBTransId: string
  SourceAccount: string
  DestinationAccount: string
  DestAcctName: string
  Currency: string
  Amount: string
  PrevBal: string
  PostBal: string
  PayerName: string
  Wallet: string
  Remarks: string
  Status: string
  RequestTime: string
  EntryDate: string
  ResponseTime: string
  PayeeName: string
  PayeeMobile: string
  Network: string
  PINRequestTime: string
  PINReceiveTime: string
  PINStatus: string
  Activity: string
  DestinationBank: string
  ChannelReference: string
  ActivityLogId: string
  Message: string
  CallbackURL: string
  CallbackStatus: string
  LastUpdate: string
  CallbackStartTime: string
  CallbackEndTime: string
  ChannelTransId: string
  ProviderTransId: string
  ProviderStatus: string
  ProviderLastUpdate: string
  Commission: string
  CommissionAccount: string
  SuspenseAccount: string
  APICommission: string
  APICommissionAccount: string
  ChargeCustomer: string
  AmountProcessed: string
  ServiceAccountNumber: string
  ProviderMessage: string
  ServiceCommission: string
  ServiceCommissionAccount: string
  PaymentMode: string
  PaymentNetwork: string
  IsServiceAccountCredited: string
  IsServiceCommissionCredited: string
  IsApiChargeCredited: string
  IsServiceChargeCredited: string
  ServiceCharge: string
  ServiceChargeAccount: string
  IsReversed: string
}
export type User =
{
  id: string
  name: string
  email: string
  email_verified_at: string
  password: string
  user_type: string
  auth_level_id: string
  remember_token: string
  created_at: string
  updated_at: string
}
export type UserCards =
{
  Id: string
  UserId: string
  PaymentOptionId: string
  Label: string
  Status: string
  DateCreated: Date
  
  
  
  
  
}
export type UserPaymentOptions =
{
  Id: string
  UserId: string
  PaymentOptionId: string
  Label: string
  Status: string
  DateCreated: Date
  
  
  
  
  
}
export type UserData =
{
  Id: string           
  UserIdStr: string
  IDType: string       
  IDNumber: string
  Address: string      
  Gender: string
  UserId: string       
  ReferralCode: string
  ReferredCode: string 
  ReferredUserId: string
        
}
export type TransactionIssue =
{
  Id: string
  TransactionId: string
  UserId: string
  IssueNumber: string
  Description: string
  Status: string
  DateCreated: Date
  
}
export type UserServiceCharge =
{ 
  Id: string 
  UserId: string 
  ChargeId: string 
  Service: string 
  Status: string 
  CreatedDate: string 
}
export type UserPlatforms =
{
  Id: string
  UserId: string
  PlatformName: string
  DeviceName: string
  UserAgent: string
  NotificationToken: string
  DeviceIMEI: string
  PlatformKey: string
  PlatformIV: string
  Status: string
  LastUpdated: string
}
export type Users =
{
  id: string
  name: string
  email: string
  email_verified_at: string
  password: string
  user_type: string
  auth_level_id: string
  remember_token: string
  created_at: string
  updated_at: string
  merchant_id: string
}
export type VodafoneCashTransaction =
{
  id: string            
  transdate: string
  sourceAccount: string 
  transactionCode: string
  destAccount: string   
  amount: string
  status: string        
  Msisdn: string
  statusDesc: string    
  transName: string
  CompanyID: string     
  referecnceID: string
  transmitted: string   
  bFName: string
  bLName: string        
  currency: string
  mDate: string         
  countryCode: string
  Remarks: string       
  DebitResponse: string
}
export type VodafoneCashTransactionLog =
{
  Id: string
  RequestBody: string
  ResponseBody: string
  CallBackResponseBody: string
  RequestType: string
  PhoneNumber: string
  VoucherCode: string
  Amount: string
  ResponseConversationID: string
  ResponseDesc: string
  ResponseCode: string
  ResultType: string
  ResultCode: string
  ResultDescription: string
  ResultOriginatorConversationID: string
  ResultConversationID: string
  ResultTranactionID: string
  TransDate: string
  Remarks: string
  Charge: string
}
export type Wallets =
{
  Id: string
  PhoneNumber: string
  Network: string
  Status: string
  UserPaymentOptionId: string
  DateCreated: Date
  
}








































































































































































































































































































































































































































































