export function notFoundError(entityName: string) {
  return {
    NOT_FOUND: {
      status: 404,
      message: `${entityName} not found.`,
    },
  };
}
