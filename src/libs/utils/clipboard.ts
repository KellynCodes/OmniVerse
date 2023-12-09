import { AlertDto } from "./../types/Dtos/alert.dto";
export const CopyText = async (
  textContent: string | undefined
): Promise<AlertDto> => {
  let response: AlertDto | null = null;
  if (textContent) {
    try {
      await navigator.clipboard.writeText(textContent);
      console.log("Text copied to clipboard:", textContent);
      response = { isSuccessful: true, message: "Copied" };
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
      response = { isSuccessful: false, message: "Not copied try again!" };
    }
    return response;
  }
  return response ?? { isSuccessful: false, message: "Nothing to copy." };
};
