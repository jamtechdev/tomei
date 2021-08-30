import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from User Microservice!';
  }

  async register(body): Promise<any> {
    try {
      const response = {
        body: body,
        status: 'success'
      };
      return !!response;
    } catch (e) {
      const message = JSON.parse(e?.response?.text);
      if (message && message?.title == 'Member Exists') {
        throw new HttpException(
          'This email is already registered.',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (message && message?.title == 'Invalid Resource') {
        throw new HttpException(message?.detail, HttpStatus.BAD_REQUEST);
      }
      throw new Error();
    }
  }
}
