interface ILoginRequestModel {
  osType: number;
  email: string;
  password: string;
  deviceId?: string;
  deviceToken?: string;
}

export default ILoginRequestModel;
