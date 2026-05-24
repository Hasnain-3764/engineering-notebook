import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function BlogPlaceholder() {
  return (
    <Layout
      title="Journal"
      description="Mohd. Hasnain's journal page."
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Journal</h1>
            <p>
              This space is intentionally empty for now.
            </p>
            <p>
              When Mohd. Hasnain starts publishing shorter logs, experiments, and progress notes,
              they will appear here.
            </p>
            <p>
              <Link to="/docs/intro">Browse the notebook</Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
