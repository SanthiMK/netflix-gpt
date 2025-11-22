export interface ProviderUserInfo {
  providerId: string;
  federatedId: string;
  email: string;
  rawId: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}
