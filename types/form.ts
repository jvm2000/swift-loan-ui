export type PersonalInfo = {
  first_name: string,
  middle_name?: string,
  last_name: string,
  birthday: string,
  gender: string
}

export type AddressInfo = {
  home_address: string,
  length_of_stay: string,
  ownership: string,
  contact_number: string
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