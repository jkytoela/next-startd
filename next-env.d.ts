/// <reference types="next" />
/// <reference types="next/types/global" />

// eslint-disable-next-line prettier/prettier
declare module "*.svg" {
  const content: any;
  export default content;
}
