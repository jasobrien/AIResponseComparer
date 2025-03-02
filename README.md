# AI Response Comparer

This project compares SOAP responses against each other and validates them against a provided WSDL schema using OpenAI's GPT-4 model.

## Prerequisites

- Node.js
- NPM
- OpenAI API Key
- Ollama (Ensure Ollama is running)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/AIResponseComparer.git
   cd AIResponseComparer
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

### Comparing SOAP Responses

1. Place your WSDL file in the `automation-tool/src/utils/wsdl` directory and name it `multiple.wsdl`.

2. Place your SOAP request payloads in the `automation-tool/src/requests` directory. For example:

   - `multiple.xml`
   - `multiple1.xml`

3. Run the comparison script:
   ```sh
   node automation-tool/src/index.js
   ```

### Ollama Comparison

1. Ensure Ollama is running on your local machine.

2. Use the `ollamaCompare.js` module to compare texts:

   ```javascript
   const compareTexts = require("./utils/ollamaCompare");

   async function main() {
     const text1 = "Your first text here";
     const text2 = "Your second text here";

     const comparisonResult = await compareTexts(text1, text2);
     console.log(`Comparison Result:`, comparisonResult);
   }

   main();
   ```

## Project Structure

- `automation-tool/src/index.js`: Main script to run the SOAP response comparison.
- `automation-tool/src/utils/compareResponses.js`: Function to compare SOAP responses using OpenAI's GPT-4 model.
- `automation-tool/src/utils/ollamaCompare.js`: Function to compare texts using Ollama.
- `automation-tool/src/utils/prompt`: Template for the prompt used in the comparison.
- `automation-tool/src/utils/wsdl/multiple.wsdl`: WSDL file for validation.
- `automation-tool/src/requests/multiple.xml`: SOAP request payload.
- `automation-tool/src/requests/multiple1.xml`: SOAP request payload.

## Example Output

```sh
Comparison Result: {
  comparison: 'Detailed comparison result here...',
  result: 'pass'
}
```

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

```

This update includes instructions on how to use the new functionality, including the SOAP response comparison and the Ollama text comparison. It also provides an overview of the project structure and example output.
```
