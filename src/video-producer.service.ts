import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from './constants';
import { TranscodeOptions } from './interfaces';

@Injectable()
export class VideoProducer {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}

  async transcode(transcodeOptions: TranscodeOptions) {
    await this.transcodeQueue.add(transcodeOptions);
  }
}
