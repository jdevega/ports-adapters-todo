export interface LoggerPortInterface {
  log(text): void;
  table(items: Array<Object>, columns?: Array<String>): void;
}
