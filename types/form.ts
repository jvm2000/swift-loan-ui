export type PersonalInfo = {
  first_name: string,
  middle_name?: string,
  last_name: string,
  birthday: string,
  gender: string,
  relationship_to_principal_borrower?: string
}

export type AddressInfo = {
  home_address: string,
  length_of_stay: string,
  ownership: string,
  contact_number: string,
  landline_number?: string
}

export type Identification = {
  marital_status: string,
  nationality: string,
  valid_id_number: string
}

export type Employee = {
  company_name: string,
  position: string,
  company_address: string,
  company_contact_number: string,
  years_of_service: string
}

export type Income = {
  monthly_income: string,
  other_icome: string,
}

export type Family = {
  mothers_maiden_name: string,
}

export type CoBorrowerPersonalInfo = {
  co_first_name: string,
  co_middle_name?: string,
  co_last_name: string,
  co_birthday: string,
  co_gender: string,
  co_relationship_to_principal_borrower?: string
}

export type CoBorrowerAddressInfo = {
  co_home_address: string,
  co_length_of_stay: string,
  co_ownership: string,
  co_contact_number: string,
  co_landline_number?: string
}

export type CoBorrowerIdentification = {
  co_marital_status: string,
  co_nationality: string,
  co_valid_id_number: string
}

export type CoBorrowerEmployee = {
  co_company_name: string,
  co_position: string,
  co_company_address: string,
  co_company_contact_number: string,
  co_years_of_service: string
}

export type CoBorrowerIncome = {
  co_monthly_income: string,
  co_other_icome: string,
}

export type CoBorrowerFamily = {
  co_mothers_maiden_name: string,
}