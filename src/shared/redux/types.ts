export type reducerType<T> = (
  state: T,
  action: { type?: string; payload?: any },
) => T;
