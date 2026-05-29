export const metadata = {
  title: 'Privacy Policy — Hendrix Studios',
  description: 'Privacy policy for Hendrix & Co. LLC apps, including Pax and Wise Alarm.',
};

export default function Privacy() {
  return (
    <div className="wrap">
      <div className="doc">
        <a className="back" href="/">← Hendrix Studios</a>
        <h1>Privacy Policy</h1>
        <div className="updated">Last updated: May 2026</div>

        <p>
          This Privacy Policy applies to all applications published by Hendrix &amp; Co. LLC
          (&ldquo;Hendrix,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), including Pax and Wise Alarm
          (collectively, the &ldquo;Apps&rdquo;). We have built our Apps to be private by design.
        </p>

        <h2>The short version</h2>
        <p>
          Our Apps do not collect, transmit, sell, or share your personal data. We do not use
          analytics, advertising, or third-party tracking. Information you enter stays on your device.
        </p>

        <h2>Information we do not collect</h2>
        <p>
          We do not collect personally identifiable information. We do not require an account to use
          the core features of our Apps. We do not track your location, your contacts, or your activity
          across other apps or websites.
        </p>

        <h2>Information stored on your device</h2>
        <p>
          Our Apps may store information locally on your device so the App can function — for example,
          your settings, preferences, reflections, or progress. This information remains on your device
          and is under your control. Deleting the App removes this information.
        </p>

        <h2>Optional data sharing (Pax)</h2>
        <p>
          Pax includes an optional feature that lets a user voluntarily share limited, anonymized
          session information with a clinician they have chosen to connect with. This sharing only
          occurs if the user explicitly enables it and pairs with a clinician. Free-text reflections
          remain on the user&rsquo;s device; only structured signals the user has agreed to share are
          transmitted. The user can disable sharing at any time.
        </p>

        <h2>Third-party services</h2>
        <p>
          Our Apps do not include third-party advertising or analytics SDKs. Where an App uses a
          service to provide a specific feature (for example, generating a response), only the minimum
          information needed to perform that function is processed, and it is not used to build a
          profile of you or sold to anyone.
        </p>

        <h2>Children</h2>
        <p>
          Our Apps are not directed to children. We do not knowingly collect information from children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be reflected by
          updating the &ldquo;Last updated&rdquo; date above.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy or your privacy, contact us at{' '}
          <a href="mailto:support@hendrixstudios.com">support@hendrixstudios.com</a>.
        </p>

        <p style={{ marginTop: '40px', fontSize: '14px' }}>
          Hendrix &amp; Co. LLC · Temecula, California
        </p>
      </div>
    </div>
  );
}
