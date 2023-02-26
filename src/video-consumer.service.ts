import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { TRANSCODE_QUEUE } from './constants';

@Processor(TRANSCODE_QUEUE)
export class VideoConsumer {
  private readonly logger = new Logger(VideoConsumer.name);
  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Transcoding message: ${job.id}`);
    this.logger.log('Data:', job.data);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 50000));
    await job.progress(100);
    this.logger.log(`Transcoding complete for job: ${job.id}`);
  }
}
