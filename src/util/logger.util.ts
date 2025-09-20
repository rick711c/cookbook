import { Logger } from '@nestjs/common';

class AppLogger {
  private readonly logger = new Logger(AppLogger.name);

  logInput(className: string, functionName: string, input?: any): void {
    this.logger.log(
      `Class: ${className}, Function: ${functionName}}, input: ${JSON.stringify(input)}`,
    );
  }

  logError(
    className: string,
    functionName: string,
    input: any,
    errorMessage: string,
  ): void {
    if (!input) {
      input = {};
    }
    this.logger.error(
      `Class: ${className}, Function: ${functionName}, Input: ${JSON.stringify(
        input,
      )}, Error: ${errorMessage}`,
    );
  }

  logWarn(message: string) {
    this.logger.warn(message);
  }

  logInfo(message: any) {
    this.logger.log(message);
  }
}

export const loggerObj = new AppLogger();
