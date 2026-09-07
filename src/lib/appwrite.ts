import { Client, Databases, ID } from "appwrite";

const rawEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.trim();
const rawProjectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID?.trim();

const isValidUrl = (url?: string): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(
      url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
    );
    return Boolean(parsed.hostname);
  } catch {
    return false;
  }
};

const getEndpoint = (): string => {
  if (rawEndpoint && isValidUrl(rawEndpoint)) {
    return rawEndpoint.startsWith("http://") || rawEndpoint.startsWith("https://")
      ? rawEndpoint
      : `https://${rawEndpoint}`;
  }
  return "https://cloud.appwrite.io/v1";
};

const ENDPOINT = getEndpoint();
const PROJECT_ID = rawProjectId || "";

if (!rawProjectId || !rawEndpoint) {
  console.warn("Appwrite credentials not configured");
}

const client = new Client();

try {
  client.setEndpoint(ENDPOINT);
  if (PROJECT_ID) {
    client.setProject(PROJECT_ID);
  }
} catch (error) {
  console.warn("Failed to initialize Appwrite client:", error);
}

const databases = new Databases(client);

export { client, databases, ID };

