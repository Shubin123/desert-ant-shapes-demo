export async function load(onProgress) {
  const { Shapes } = await import('@desert-ant-labs/shapes');
  const litert = await import('@litertjs/core');
  return Shapes.load({ litert, litertWasmDir: 'https://unpkg.com/@litertjs/core@2.5.2/wasm/', onProgress });
}

