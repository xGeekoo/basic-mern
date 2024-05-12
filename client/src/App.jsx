import { useEffect, useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function main() {
      const res = await fetch('/api/v1', { signal: controller.signal });
      if (!res.ok) throw new Error('Failed to fetch');
      const text = await res.text();
      setResponse(text);
    }

    main().catch(err => err.name !== 'AbortError' && console.error(err));

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Hello GitHub!</h1>
      <p>Some fetch content:</p>
      {response && <p>{response}</p>}
    </>
  );
}

export default App;
