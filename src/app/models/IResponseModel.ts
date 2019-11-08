interface IResponseModel<T> {
  message: string;
  success: boolean;
  data: T;
}

export default  IResponseModel;
