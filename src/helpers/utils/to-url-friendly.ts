/**
 * Converts a string to a URL-friendly format. If the input is null or undefined, returns an empty string.
 * The function removes accents, converts to lowercase, and replaces non-alphanumeric characters with hyphens.
 *
 * @param {string | null | undefined} input - The input string to be converted.
 * @returns {string} A sanitized, URL-friendly version of the input string.
 */
export function toUrlFriendly(input: string | null | undefined): string {
  if (!input) return "";

  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
