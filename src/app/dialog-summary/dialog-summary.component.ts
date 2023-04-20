import { Component, OnInit } from '@angular/core';
import { env } from 'env';
const { Configuration, OpenAIApi } = require('openai');

@Component({
  selector: 'app-dialog-summary',
  templateUrl: './dialog-summary.component.html',
  styleUrls: ['./dialog-summary.component.scss']
})
export class DialogSummaryComponent implements OnInit {

  messages: any = []; currentMessage = '';

  configuration = new Configuration({
    apiKey: env.OPENAI_API_KEY
  });
  openai = new OpenAIApi(this.configuration);

  constructor() {
    this.messages.push({
      content: 'Hello, I am a bot that summarizes interactions between teachers and students. Provide an inteaction to summarize.',
      sentBy: 'bot'
    });
  }

  ngOnInit(): void {}

  async sendMessage() {
    const request = {
      model: 'text-davinci-002',
      prompt: `${this.currentMessage}\nSummarize this interaction:`,
      max_tokens: 300,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    };

    // reset the current message
    this.messages.push({
      content: this.currentMessage,
      sentBy: 'user'
    });
    this.currentMessage = '';

    const response = await this.openai.createCompletion(request);

    this.messages.push({
      content: response.data.choices[0].text,
      sentBy: 'bot'
    });
  }
}
