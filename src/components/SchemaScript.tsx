interface SchemaScriptProps {
  schema: object;
}

// Plain server-rendered <script>, not next/script - JSON-LD is static data,
// not a script that needs deferred loading. It must be present in the
// initial HTML for crawlers that don't execute JS (or don't wait for
// lazyOnload) to see it at all.
export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}