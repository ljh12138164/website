import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  go() {
    return 'hello';
  }
}
