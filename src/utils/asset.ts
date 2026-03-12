export function assetPath(path: string) {
  const baseUrl = import.meta.env.BASE_URL;
  const normalizedBase = baseUrl.charAt(baseUrl.length - 1) === "/" ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
}
