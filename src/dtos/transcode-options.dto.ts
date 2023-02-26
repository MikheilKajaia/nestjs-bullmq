import { IsString } from 'class-validator';
import { TranscodeOptions } from 'src/interfaces';

export class TranscodeOptionsDto implements TranscodeOptions {
  @IsString()
  filePath: string;

  @IsString()
  fileDestination: string;
}
