# ChatGPT - OPEN AI API

1. After clone, run

    ```bash
    cd frontend-angular-chatgpt-app
    pnpm i
    ```

2. Then, generate environments

    ```bash
    ng g environments
    ```

3. Set this properties to environment file

    ```bash
    export const environment = {
        OPENAI_API_KEY: 'your_api_key',
        BASE_API_URL: 'https://api.openai.com/v1/chat/completions',
    };

    ```

4. Run dev server

    ```bash
    ng serve -o
    ```

## Dependencies

[git commit msg linter](https://www.npmjs.com/package/git-commit-msg-linter): A lightweight, independent, 0 configurations and joyful git commit message linter.
👀 Watching your every git commit message INSTANTLY 🚀.
