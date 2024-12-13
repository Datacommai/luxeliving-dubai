import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navigation/navigation";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="h-full">
      <Navigation hideLinks={true} />
      <section className="lg:px-20 md:px-10  xxs:py-5 md:py-10 ">
        <section className="mx-12 my-2">
          <h2 className="text-black xxs:mb-5 lg:my-10 font-bold xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            Privacy Policy
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            At LuxeLivingDubai, we are committed to protecting your privacy.
            This policy outlines how we collect, use, and safeguard your
            personal information to provide you with the best possible services.
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            1. Collection of Personal Information
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            To contact you and deliver our services effectively, we may collect
            the following personal information:
            <br />
            <p className="my-5 font-medium">
              Your name, address, phone number, and email address when you:
            </p>
            <ol className="space-y-2 font-light">
              <li>- Register on our website.</li>
              <li>- Inquire about our products or services.</li>
              <li>
                - Subscribe to our newsletter or marketing communications.
              </li>
            </ol>
            <p className="my-2 font-medium xxs:text-sm md:text-lg">
              We only collect personal information necessary for providing our
              services. Sensitive information will only be collected with your
              explicit consent.
            </p>
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            2. Use of Personal Information
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            We use your personal information to:
            <ol className="space-y-2 my-5 font-light">
              <li>- Respond to inquiries and provide requested services.</li>
              <li>
                - Improve your experience on our website and personalize our
                services.
              </li>
              <li>
                - Send marketing communications about our services or
                third-party products with your consent.
              </li>
            </ol>
            <p className="font-medium xxs:text-sm md:text-lg">
              You will always have the option to opt out of such communications.
            </p>
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            3. Marketing and Third Parties
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            <ol className="space-y-2 font-light">
              <li>
                - With your explicit permission, we may share your details with
                trusted third parties for marketing purposes.
              </li>
              <li>
                - You will always have the opportunity to refuse such
                communications by following the unsubscribe instructions in our
                emails.
              </li>
            </ol>
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            4. Use of Cookies
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            This website uses cookies, tracking pixels, and related technologies
            to enhance user experience. These small data files:
            <ol className="space-y-2 my-5 font-light">
              <li>- Help us operate and personalize the website.</li>
              <li>
                - Enable tracking of your activity on the site to deliver
                targeted ads on other platforms.
              </li>
            </ol>
            <p className="font-medium xxs:text-sm md:text-lg">
              You can manage or disable cookies through your browser settings.
              Note that disabling cookies may impact the functionality of
              certain features on the site.
            </p>
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            5. Data Protection and Security
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            We are committed to ensuring your personal data is secure. We
            implement appropriate technical and organizational measures to
            prevent unauthorized access, alteration, or disclosure of your
            information. However, no system can guarantee absolute security, and
            you use the site at your own risk.
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            6. Your Rights
          </h2>

          <article className="my-5 xxs:text-sm md:text-lg">
            You have the following rights regarding your personal data:
            <ol className="space-y-2 my-5 font-light">
              <li>- Access your personal data and request corrections.</li>
              <li>
                - Withdraw your consent for marketing or other data processing
                activities.
              </li>
              <li>
                - Request deletion of your personal data unless required for
                legal or operational purposes.
              </li>
            </ol>
            <p className="font-medium xxs:text-sm md:text-lg">
              To exercise these rights, contact us using the details below.
            </p>
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            7. Changes to This Policy
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            We reserve the right to update this Privacy Policy at any time.
            Changes will be posted on this page with an updated "Last Revised"
            date. Continued use of our website constitutes your agreement to the
            revised terms.
          </article>
        </section>

        <section className="mx-12 my-8">
          <h2 className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
            8. Contact Us
          </h2>
          <article className="my-5 xxs:text-sm md:text-lg">
            If you have any questions about this Privacy Policy or wish to stop
            receiving communications from us, please contact us at:
            <Link
              className="underline text-success gap-1"
              href="mailto: info@luxelivingdubai.com"
            >
              info@luxelivingdubai.com
            </Link>
          </article>
        </section>
      </section>
      <Footer />
    </main>
  );
}
