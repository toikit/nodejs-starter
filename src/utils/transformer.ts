import { BaseController } from "@toikit/toikit";

export class TransformerProvider {
  res: any;

  setResponse(res){
    this.res = res;
  }

  success(data) {
    this.res.status(200).json(data);
  }

  error(errors, code: number = 422) {
    this.res.status(code).json(errors);
  }
  
  exception(e, data = {}) {
    console.error(e);
    this.res.status(500).json(data);
  }
}

export class TransformerController extends BaseController {
  protected transformer: any;
  
  async handle(method, req, res){
    this.transformer = new TransformerProvider();

    // Perform any necessary operations before the controller action
    // For example, logging or validating user authentication
    await this.transformer.setResponse(res);

    try {
      super.handle(method, req, res);
    } catch (e) {
      this.transformer.exception(e);
    }
  }
}