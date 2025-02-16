const compareTexts = require("./utils/ollamaCompare");

async function runComparison() {
    const text1 = "The";
    const text2 = "The";

    try {
        const result = await compareTexts(text1, text2);
        console.log("Comparison Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

runComparison();
