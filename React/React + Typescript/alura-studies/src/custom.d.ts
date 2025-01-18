declare module "*.svg" {
    const content: string;
    export default content;
  }

// filepath: /path/to/src/custom.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}