export type PrimaryAppPersonalInfo = {
  first_name: string,
  middle_name?: string,
  last_name: string,
  birthday: string,
  gender: string
}

export type PrimaryAppAddressInfo = {
  home_address: string,
  length_of_stay: string,
  ownership: string,
  contact_number: string
}

export type PrimaryAppIdentification = {
  marital_status: string,
  nationality: string,
  valid_id_number: string
}