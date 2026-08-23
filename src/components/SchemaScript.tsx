'use client';

import Script from 'next/script';

interface SchemaScriptProps {
  schema: object;
}

export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="lazyOnload"
    />
  );
}