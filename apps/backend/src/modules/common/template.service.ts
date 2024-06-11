import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateService {
  make(template: string, vars: string[]): string {
    let result = template;
    vars.forEach((v, i) => {
      result = result.replace(`$${i + 1}`, v);
    });
    return result;
  }
}
