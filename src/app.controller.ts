import { Body, Controller, Post } from '@nestjs/common';
import { TranscodeOptionsDto } from './dtos';
import { VideoProducer } from './video-producer.service';

@Controller()
export class AppController {
  constructor(private readonly producerService: VideoProducer) {}

  @Post('transcode')
  transcode(@Body() transcodeOptions: TranscodeOptionsDto) {
    return this.producerService.transcode(transcodeOptions);
  }
}
