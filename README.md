# غٌلامَم - Golamam

A simple chat UI that interacts with the GPT-3 API, built with Angular and Tailwind. It provides two sample interactions, one with a bot answering Computer Science questions, and a second one that summarizes a dialog between a student and a teacher.

To make it work with your own GPT-3 acount, simply create a `env.ts` file in the root folder of the project, with a content of:
```
export const env = {
  OPENAI_API_KEY: 'your-own-api-key-here'
};
```
and replace with your own API key. **Keep in mind that such a practice, if you choose to deploy the app, might end up publicly exposing your API key,** and thus a better solution is to use your own backend service that handles interactions with GPT-3 API.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Sample conversation with chatbot about computer science:
![Alt text](golamam-demo.png?raw=true "Sample conversation with chatbot about computer science")

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
