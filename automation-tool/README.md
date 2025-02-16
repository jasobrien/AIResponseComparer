# Automation Tool

This project is an automation tool that sends the same request to two different endpoints and compares the responses using AI-based logic.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functionality](#functionality)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the automation tool, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd automation-tool
npm install
```

## Usage

To use the automation tool, you can run the application with the following command:

```bash
npm start
```

Make sure to modify the `src/index.js` file to set your desired endpoints and request payload.

## Environment Variables

Create a `.env` file in the root directory of your project and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Functionality

The automation tool consists of the following components:

- **Request Service**: The `src/services/requestService.js` file handles sending requests to the specified endpoints and returns the responses.
- **Response Comparison**: The `src/utils/compareResponses.js` file contains the logic to analyze and compare the responses using AI techniques.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
