import { UserRole } from "@/types/user";

export interface PageAccessRight {
  role: UserRole;
}

export type PageAccessName =
  | "Dashboard"
  | "MonitoringTools"
  | "AddPayment"
  | "Home"
  | "OrderList"
  | "CustomerRegistration"
  | "EmployeeRegistration"
  | "Orders"
  | "EmployeeList"
  | "CustomersList"
  | "AddAddress"
  | "PaymentsList"
  | "CustomerProfile"
  | "Bottles"
  | "ChangePersonalDetails"
  | "EmployeeProfile"
  | "ConfigurableConstants"
  | "AddBottles"
  | "ChangePassword"
  | "ForgotPassword"
  | "OrdersHistory"
  | "PaymentsHistory"
  | "ResetPassword"
  | "ReturnBottles"
  | "SuspendedCustomersList"
  | "Coolers"
  | "CoolerLog"
  | "AddCooler"
  | "Customer Coolers";

export interface RouteConfigs {
  title: string;
  pageAccessName?: PageAccessName;
}
